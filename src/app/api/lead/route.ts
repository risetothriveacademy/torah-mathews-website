import { NextResponse } from "next/server";

// This route runs on the server so the GoHighLevel token is never exposed to
// the browser. It receives a simple lead-capture submission (e.g. the free
// memoir / sample-chapter request on the book page), then creates/updates the
// contact in GoHighLevel so that tag-based and "contact created" workflows can
// fire automatically. It mirrors the retreat-application route and shares the
// same GHL_API_KEY / GHL_LOCATION_ID configuration.
export const dynamic = "force-dynamic";

const GHL_API_BASE = "https://services.leadconnector.com";
const GHL_API_VERSION = "2021-07-28";
const DEFAULT_TAG = "website-lead";
const DEFAULT_SOURCE = "Website Lead Capture";

// Only allow tags/sources the site itself sends, so the public endpoint cannot
// be used to write arbitrary tags into the CRM.
const ALLOWED_LEADS: Record<string, { tag: string; source: string }> = {
  "free-memoir": {
    tag: "free-memoir-download",
    source: "Book Page – Free Memoir Download",
  },
};

interface LeadSubmission {
  name?: string;
  email?: string;
  phone?: string;
  lead?: string;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts.shift() ?? "";
  return { firstName, lastName: parts.join(" ") };
}

export async function POST(request: Request) {
  let body: LeadSubmission;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const leadConfig = (body.lead && ALLOWED_LEADS[body.lead]) || {
    tag: DEFAULT_TAG,
    source: DEFAULT_SOURCE,
  };

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.error(
      "GoHighLevel is not configured: set GHL_API_KEY and GHL_LOCATION_ID environment variables.",
    );
    return NextResponse.json(
      { error: "The signup service is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const { firstName, lastName } = splitName(name);

  // Upsert avoids duplicate-contact errors when the same person submits twice
  // and still triggers create/update workflows in GoHighLevel.
  const payload = {
    locationId,
    firstName,
    lastName,
    name,
    email,
    ...(phone ? { phone } : {}),
    source: leadConfig.source,
    tags: [leadConfig.tag],
  };

  try {
    const ghlResponse = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!ghlResponse.ok) {
      const detail = await ghlResponse.text();
      console.error(
        `GoHighLevel contact upsert failed (${ghlResponse.status}): ${detail}`,
      );
      return NextResponse.json(
        { error: "We could not submit your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("GoHighLevel request error:", error);
    return NextResponse.json(
      { error: "We could not submit your request. Please try again." },
      { status: 502 },
    );
  }
}
