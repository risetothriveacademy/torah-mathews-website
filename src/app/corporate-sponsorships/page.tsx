import type { Metadata } from "next";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { SectionBanner } from "@/components/SectionBanner";

export const metadata: Metadata = {
  title: "Corporate & Community Sponsorships – Trauma Recovery Partnerships",
  description:
    "Partner with Torah Mathews to fund faith-based trauma recovery programs for shelters, abuse survivors, young adults, addiction recovery centers, and community organizations.",
};

export default function CorporateSponsorshipsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-16 mx-auto max-w-6xl lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
              Corporate &amp; Community Sponsorships
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Partner to Bring Trauma Recovery Support Where It&apos;s Needed
              Most
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Many shelters, crisis centers, and community programs are on the
              front lines of trauma—but often lack access to structured,
              faith-centered recovery resources. By partnering with Torah
              Mathews, your organization can help bring holistic mental health
              support to those who need it most.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Sponsorships help provide{" "}
              <span className="font-semibold">
                emotional, spiritual, and practical tools
              </span>{" "}
              to survivors of abuse, addiction, homelessness, and deep mental
              distress.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#sponsorship-form"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-700 rounded-lg shadow-sm hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                Explore Sponsorship Opportunities
              </a>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Who You Can Help
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Women&apos;s shelters &amp; domestic abuse survivors</li>
              <li>• Young adults facing emotional and spiritual crisis</li>
              <li>• Addiction recovery and relapse-prevention programs</li>
              <li>• Transitional housing &amp; crisis support centers</li>
              <li>• Community outreach &amp; faith-based organizations</li>
            </ul>
            <p className="mt-4 text-sm italic text-slate-600">
              Your sponsorship becomes a lifeline—bridging the gap between
              clinical care, spiritual support, and practical recovery tools.
            </p>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <ScrollingBanner text="Partnering With Churches, Businesses & Communities to Bring Faith-Based Healing to Those Who Need It Most." />

      {/* Why It Matters */}
      <section className="px-6 py-16 mx-auto max-w-6xl border-t border-slate-100 bg-slate-50 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Why This Matters
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Mental Distress Is Rising—Resources Are Not
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-3 text-sm leading-relaxed text-slate-700">
            <p>
              Trauma and mental health challenges affect every part of a
              person&apos;s life—relationships, work, faith, finances, and
              daily functioning. Many who are struggling turn first to shelters,
              churches, or community programs when clinical systems are
              overloaded or out of reach.
            </p>
            <p>
              Staff and volunteers in these environments carry heavy emotional
              loads, often without enough training or resources to support
              survivors in a sustainable way.
            </p>
            <p>
              Sponsorships help ensure that those on the front lines are not
              left alone—and that survivors can access structured, hope-filled
              trauma recovery pathways.
            </p>
          </div>

          <div className="space-y-3 text-sm leading-relaxed text-slate-700">
            <p>
              Your partnership makes it possible to offer holistic support that
              integrates:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Physiological care – honoring the impact of trauma on the body</li>
              <li>Psychological care – addressing thoughts, emotions, and patterns</li>
              <li>
                Spiritual care – restoring identity, hope, and connection to God
              </li>
            </ul>
            <p>
              This three-pillar approach addresses both the visible and the
              hidden layers of trauma, making long-term recovery more
              attainable.
            </p>
          </div>
        </div>
      </section>

      {/* What Sponsorship Supports */}
      <section className="px-6 py-16 mx-auto max-w-6xl lg:px-8">
        {/* Section Banner */}
        <div className="max-w-6xl mx-auto">
          <SectionBanner text="When We Heal Hearts, We Heal Families — When We Heal Families, We Heal Communities." />
        </div>

        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Sponsorship Impact
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            What Your Sponsorship Helps Provide
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Trauma Recovery Workshops
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Faith-centered workshops that introduce the 3 pillars of healing,
              trauma awareness, and practical next steps for survivors and
              support staff.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Emotional &amp; Spiritual Healing Sessions
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Group or digital sessions designed to help women and young adults
              process grief, anxiety, and shame while reconnecting with hope in
              God.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Recovery Tools &amp; Workbooks
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Printable and digital materials, reflection journals, and
              structured exercises that equip survivors to continue the work
              between sessions.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Training for Staff &amp; Volunteers
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Trauma-informed, faith-aligned training to help those who serve on
              the front lines care for others without burning out themselves.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Access to Digital Courses
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Sponsored access to selected courses and resources from the Rise &amp;
              Thrive Academy, tailored for shelters and partner organizations.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Ongoing Support &amp; Collaboration
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Partnership check-ins, resource updates, and collaboration on
              future initiatives as needs evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="px-6 py-16 mx-auto max-w-6xl border-t border-slate-100 bg-slate-50 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Sponsorship Levels
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Flexible Partnership Options
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 max-w-2xl mx-auto">
            The amounts and details can be customized, but here is a suggested
            structure for how partners can engage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-base font-semibold text-slate-900">
              Community Partner
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed flex-1">
              Helps provide trauma recovery resources to a small group of
              survivors in one program or shelter.
            </p>
            <p className="mt-4 text-sm font-semibold text-teal-800">
              Ideal for: Small businesses, local ministries, individuals.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-base font-semibold text-slate-900">
              Restoration Sponsor
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed flex-1">
              Supports workshops, materials, and digital resources for multiple
              groups or a full shelter program over a defined season.
            </p>
            <p className="mt-4 text-sm font-semibold text-teal-800">
              Ideal for: Established businesses, churches, foundations.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-base font-semibold text-slate-900">
              Transformation Partner
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed flex-1">
              Enables a broader initiative—multiple locations, expanded digital
              access, and deeper collaboration over time.
            </p>
            <p className="mt-4 text-sm font-semibold text-teal-800">
              Ideal for: Corporate sponsors, large ministries, major donors.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Inquiry Form Placeholder */}
      <section
        id="sponsorship-form"
        className="px-6 py-16 mx-auto max-w-3xl lg:px-8"
      >
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Start a Sponsorship Conversation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            If you&apos;re interested in partnering to bring trauma recovery
            support to shelters, young adults, or community programs, please use
            the space below to inquire. A member of the team will follow up to
            discuss options and impact.
          </p>
        </div>

        {/* Placeholder for actual form */}
        <div className="p-6 bg-white rounded-2xl border border-dashed border-slate-300 text-sm text-slate-600">
          <p className="font-semibold text-slate-900 mb-1">
            Sponsorship Inquiry Form Placeholder
          </p>
          <p>
            Replace this with your HubSpot or custom contact form. For now, this
            container indicates where the integration will go.
          </p>
        </div>
      </section>
    </main>
  );
}
