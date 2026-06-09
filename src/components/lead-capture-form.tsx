"use client";

import { useState } from "react";

interface LeadCaptureFormProps {
  /** Identifies which lead workflow/tag to apply in GoHighLevel. */
  lead: string;
  /** Label for the submit button. */
  submitLabel?: string;
  /** Heading shown after a successful submission. */
  successTitle?: string;
  /** Body text shown after a successful submission. */
  successMessage?: string;
}

export function LeadCaptureForm({
  lead,
  submitLabel = "Send It to Me",
  successTitle = "Check your inbox!",
  successMessage = "Thank you. Your request has been received and we'll be in touch shortly.",
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      lead,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(
          result.error || "Something went wrong. Please try again.",
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-teal-800">{successTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="lead-name"
          className="block text-sm font-medium text-slate-900"
        >
          Full Name <span className="text-teal-700">*</span>
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
      </div>

      <div>
        <label
          htmlFor="lead-email"
          className="block text-sm font-medium text-slate-900"
        >
          Email <span className="text-teal-700">*</span>
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
      </div>

      <div>
        <label
          htmlFor="lead-phone"
          className="block text-sm font-medium text-slate-900"
        >
          Phone <span className="text-slate-400">(optional)</span>
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      <p className="text-xs text-slate-500">
        We respect your privacy. Your information is used only to send what you
        requested and occasional encouragement related to trauma recovery and
        faith.
      </p>
    </form>
  );
}
