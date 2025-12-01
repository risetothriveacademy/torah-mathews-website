import type { Metadata } from "next";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { SectionBanner } from "@/components/SectionBanner";
import { TVShowBanner } from "@/components/TVShowBanner";

export const metadata: Metadata = {
  title: "Speaking – Torah Mathews",
  description:
    "Book Torah Mathews to speak on trauma, faith-based mental health recovery, and holistic healing through physiological, psychological, and spiritual pillars.",
};

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-16 mx-auto max-w-6xl lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
              Speaking & Events
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Faith-Based Trauma Recovery &amp; Mental Health Advocacy for
              Churches, Leaders, and Organizations
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Torah Mathews is a trauma survivor, mental health advocate, and
              founder of a faith-centered recovery movement. She speaks to{" "}
              <span className="font-semibold">
                Christian business owners, professionals, churches, and community
                leaders
              </span>{" "}
              about the reality of trauma-induced mental distress—and the hope,
              healing, and restoration available through a holistic approach:
              body, mind, and spirit.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Her message is raw, honest, and anchored in Scripture. Torah
              brings together lived experience, practical tools, and spiritual
              insight to help audiences move from survival to purpose.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-700 rounded-lg shadow-sm hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                Book Torah to Speak
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-teal-800 bg-teal-50 rounded-lg hover:bg-teal-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                Learn more about her story
              </a>
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              Ideal for these events:
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• Church services &amp; women&apos;s conferences</li>
              <li>• Christian business &amp; marketplace gatherings</li>
              <li>• Leadership retreats &amp; staff care events</li>
              <li>• Mental health awareness Sundays &amp; seminars</li>
              <li>• Community outreach programs &amp; NGO trainings</li>
            </ul>
            <p className="mt-4 text-sm italic text-slate-600">
              "God didn&apos;t waste my pain; He transformed it into a calling to
              help others heal. I now stand not in my own strength, but in His."
            </p>
          </div>
        </div>
      </section>

      {/* TV Show Feature Banner */}
      <TVShowBanner />

      {/* Scrolling Banner */}
      <ScrollingBanner text="Bringing Faith, Healing & Hope to the Stages Where Silent Battles Are Being Fought." />

      {/* The 3 Pillars */}
      <section className="px-6 py-16 mx-auto max-w-6xl border-t border-slate-100 bg-slate-50 lg:px-8">
        {/* Section Banner */}
        <div className="max-w-6xl mx-auto">
          <SectionBanner text="Your Stage Can Become a Place of Healing — Not Just Information." />
        </div>

        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            The 3 Pillars of Healing
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            A Holistic Framework: Body, Mind, and Spirit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 max-w-2xl mx-auto">
            Torah&apos;s signature framework helps audiences understand why
            traditional approaches alone are not enough—and how integrating the
            spiritual aspect changes everything.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Pillar 1: Physiological
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Trauma impacts the body. Torah explains how nervous system
              dysregulation, exhaustion, and physical symptoms often accompany
              mental distress—and why medical care can be an essential part of
              recovery.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Pillar 2: Psychological
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Thoughts, beliefs, and emotional patterns shape behaviour. Torah
              unpacks how trauma, anxiety, and depression affect the mind—and
              how counselling, processing, and reframing are vital for
              long-term change.
            </p>
          </div>

          <div className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">
              Pillar 3: Spiritual
            </h3>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              The often-overlooked pillar: spiritual healing. Torah teaches on
              identity in Christ, spiritual warfare, and the "battlefield of the
              mind," highlighting why inviting God into the healing journey is
              essential for true restoration.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Talks */}
      <section className="px-6 py-16 mx-auto max-w-6xl lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            Signature Topics
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Signature Talks &amp; Teaching Themes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 max-w-2xl mx-auto">
            Each message can be adapted for keynotes, workshops, church services
            or leadership staff sessions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title:
                "Transforming Pain into Power: Finding God in the Rubble of Trauma",
              desc: "Torah shares her personal story of loss, mental distress, and restoration—offering a roadmap for those walking through grief, anxiety, and emotional collapse.",
            },
            {
              title:
                "The Battlefield of the Mind: Trauma, Spiritual Warfare, and Identity",
              desc: "A faith-based look at how trauma, lies, and spiritual attack affect our thinking—and how to reclaim our identity and authority in Christ.",
            },
            {
              title:
                "Holistic Healing: Why Body, Mind, and Spirit All Matter in Recovery",
              desc: "A teaching on the 3 pillars of recovery and how churches, leaders, and families can support loved ones facing mental distress without stepping beyond their role.",
            },
            {
              title:
                "Leading While Broken: Hope for High-Achieving Believers Facing Burnout",
              desc: "Designed for leaders, business owners, and professionals who have carried others while quietly collapsing inside. Torah offers language, validation, and practical next steps.",
            },
          ].map((talk) => (
            <div
              key={talk.title}
              className="h-full p-6 bg-white rounded-2xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {talk.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                {talk.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Placeholder */}
      <section
        id="booking-form"
        className="px-6 py-16 mx-auto max-w-3xl border-t border-slate-100 bg-slate-50 lg:px-8"
      >
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Booking &amp; Speaking Inquiries
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Use the form below to share details about your event, audience, and
            dates. A member of the team will follow up to discuss availability,
            fit, and next steps.
          </p>
        </div>

        {/* Placeholder for actual form embed (HubSpot / custom form) */}
        <div className="p-6 bg-white rounded-2xl border border-dashed border-slate-300 text-sm text-slate-600">
          <p className="font-semibold text-slate-900 mb-2">
            Speaking Request Form Placeholder
          </p>
          <p>
            This is where your HubSpot, Netlify form, or custom form will be
            embedded. For now, you can:
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Replace this box with a form component.</li>
            <li>Or link to an external form (e.g., HubSpot, Typeform).</li>
          </ul>
          <p className="mt-3">
            If you need a specific form integration, I can help structure the
            fields and labels.
          </p>
        </div>
      </section>
    </main>
  );
}
