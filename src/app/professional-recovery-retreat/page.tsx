import type { Metadata } from "next";
import Link from "next/link";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { RetreatInquiryForm } from "@/components/retreat-inquiry-form";

export const metadata: Metadata = {
  title: "Professional Recovery Retreat",
  description:
    "A trauma-informed, faith-centered retreat experience helping leaders, caregivers, and frontline teams recover from burnout, compassion fatigue, secondary trauma, and spiritual depletion.",
};

export default function ProfessionalRecoveryRetreatPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-[#1a7a86] text-white">
        <div className="container mx-auto px-4 max-w-5xl py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 mb-5">
            Rise To Thrive Academy · Torah Mathews
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Professional Recovery Retreat for Leaders, Caregivers, and Frontline
            Teams
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            A trauma-informed, faith-centered retreat experience designed to
            help leaders and helping professionals recover from burnout,
            compassion fatigue, emotional exhaustion, secondary trauma, and
            spiritual depletion.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-md bg-[#209bab] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#1a7a86]"
            >
              Request Retreat Information
            </Link>
            <Link
              href="/recognition-media"
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/15"
            >
              View Recognition &amp; Media
            </Link>
          </div>
        </div>
      </section>

      <ScrollingBanner text="Recover · Restore · Rise — Faith-Centered Recovery for Those Who Carry Others." />

      {/* 2. Why This Retreat Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-8 text-center">
            Why This Retreat Matters
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              The people who hold others together are often the ones quietly
              breaking down. Leaders, caregivers, chaplains, aid workers, and
              ministry teams pour themselves out day after day — and the cost
              accumulates in ways that rarely get acknowledged: chronic
              exhaustion, numbness, anxiety, loss of purpose, and a faith that
              feels distant.
            </p>
            <p>
              Burnout, compassion fatigue, and secondary trauma are not signs of
              weakness or failure. They are the predictable result of sustained
              caring work without sustained recovery. Left unaddressed, they
              erode health, relationships, leadership, and the very calling that
              first drew you to serve.
            </p>
            <div className="bg-[#209bab]/10 p-6 rounded-lg border-l-4 border-[#209bab]">
              <p className="text-xl font-semibold text-slate-900">
                This retreat creates intentional space to recover — body, mind,
                and spirit — so you can return to your work restored rather than
                depleted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Two Audience Pathways */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-4 text-center">
            Two Pathways, One Restorative Experience
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
            The Professional Recovery Retreat is shaped to meet two distinct
            communities where they are — each carrying real weight, each
            deserving real recovery.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Audience 1 */}
            <div className="bg-white rounded-2xl border-t-4 border-[#209bab] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#209bab] mb-2">
                Audience One
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                For NGOs, Nonprofits &amp; Frontline Organizations
              </h3>
              <p className="text-slate-700 leading-relaxed mb-5">
                For humanitarian, nonprofit, and frontline teams operating in
                high-stress, high-exposure environments. When your people carry
                the weight of crisis, displacement, and human suffering, their
                resilience is your mission&apos;s greatest asset — and it must be
                protected.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>NGO and humanitarian field and program staff</li>
                <li>Nonprofit leadership and care teams</li>
                <li>Crisis response and frontline service workers</li>
                <li>Social workers, case managers, and counselors</li>
                <li>Volunteers facing repeated exposure to trauma</li>
              </ul>
            </div>

            {/* Audience 2 */}
            <div className="bg-white rounded-2xl border-t-4 border-[#b18c57] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#b18c57] mb-2">
                Audience Two
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                For Churches, Ministries &amp; Faith-Based Leaders
              </h3>
              <p className="text-slate-700 leading-relaxed mb-5">
                For pastors, ministry leaders, and community care teams who shepherd
                others through their hardest seasons. Spiritual leadership is
                deeply rewarding and deeply demanding — and those who minister
                healing also need a place to be ministered to.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>Pastors, ministers, and church leadership</li>
                <li>Faith-based ministry and outreach teams</li>
                <li>Christian leaders and counselors</li>
                <li>Community care and pastoral support teams</li>
                <li>Lay leaders and volunteers serving the hurting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Retreat Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-4 text-center">
            Retreat Outcomes
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
            Participants leave with more than rest. They leave equipped to
            sustain a lifetime of meaningful service.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Relief from Burnout",
                body: "Practical recovery from emotional exhaustion, fatigue, and the chronic stress of caregiving roles.",
              },
              {
                title: "Trauma-Informed Tools",
                body: "Understanding of compassion fatigue and secondary trauma, with strategies to recognize and respond to it.",
              },
              {
                title: "Spiritual Renewal",
                body: "Reconnection with faith, calling, and the source of strength that first inspired the work.",
              },
              {
                title: "Restored Resilience",
                body: "Renewed emotional capacity and healthier rhythms to carry responsibility without collapse.",
              },
              {
                title: "Healthier Boundaries",
                body: "Clarity around limits, rest, and self-stewardship that protects both leader and mission.",
              },
              {
                title: "Renewed Purpose",
                body: "A re-grounded sense of identity and mission that outlasts seasons of pressure and depletion.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-gray-50 border border-slate-200 p-6"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Three Sphere Recovery Method */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-amber-300 mb-4 text-center">
            The Three Sphere Recovery Method
          </h2>
          <p className="text-lg text-slate-200 text-center max-w-3xl mx-auto mb-12">
            Lasting recovery requires more than rest. Torah Mathews&apos;
            whole-person framework addresses three connected spheres so healing
            reaches the root, not just the symptoms.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-300 mb-2">
                Sphere One
              </p>
              <h3 className="text-2xl font-bold mb-3">Mind &amp; Emotion</h3>
              <p className="text-slate-200 leading-relaxed">
                Addressing emotional exhaustion, stress responses, and the
                mental patterns formed by sustained pressure — building
                resilience and emotional regulation.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-300 mb-2">
                Sphere Two
              </p>
              <h3 className="text-2xl font-bold mb-3">Body &amp; Rhythm</h3>
              <p className="text-slate-200 leading-relaxed">
                Restoring healthy rhythms of rest, boundaries, and physical
                wellbeing so that the body is no longer running on depletion and
                survival.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-300 mb-2">
                Sphere Three
              </p>
              <h3 className="text-2xl font-bold mb-3">Spirit &amp; Identity</h3>
              <p className="text-slate-200 leading-relaxed">
                Reconnecting with faith, purpose, and God-given identity —
                healing spiritual depletion and restoring the calling beneath
                the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who This Retreat Is For */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-8 text-center">
            Who This Retreat Is For
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-10">
            This retreat is for the people who give the most and ask for the
            least — those carrying others while quietly running on empty.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 text-slate-700">
            {[
              "Leaders and executives in nonprofit and humanitarian work",
              "Pastors, ministers, and faith-based leaders",
              "Caregivers and helping professionals",
              "Frontline and crisis-response teams",
              "Counselors, social workers, and case managers",
              "Chaplains and pastoral care teams",
              "NGO and ministry staff facing repeated trauma exposure",
              "Anyone experiencing burnout, compassion fatigue, or spiritual depletion",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg bg-gray-50 border border-slate-200 px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#209bab]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Suggested Retreat Format */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-4 text-center">
            Suggested Retreat Format
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
            Each experience is tailored to your team&apos;s needs, capacity, and
            goals. Choose the depth that fits your organization.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm text-center">
              <p className="text-5xl font-extrabold text-[#209bab] mb-2">1</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                One-Day Reset
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A focused day of recovery — ideal for teams needing immediate
                relief, reconnection, and practical tools to address burnout.
              </p>
            </div>
            <div className="rounded-2xl bg-white border-2 border-[#209bab] p-8 shadow-md text-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#209bab] mb-1">
                Most Popular
              </p>
              <p className="text-5xl font-extrabold text-[#209bab] mb-2">2</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Two-Day Restoration
              </h3>
              <p className="text-slate-700 leading-relaxed">
                A deeper experience that moves beyond relief into restoration —
                space to process, recover, and rebuild healthier rhythms.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm text-center">
              <p className="text-5xl font-extrabold text-[#209bab] mb-2">3</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Three-Day Renewal
              </h3>
              <p className="text-slate-700 leading-relaxed">
                The full Three Sphere journey — comprehensive recovery for mind,
                body, and spirit, with lasting tools for resilience and renewed
                purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. About Torah Mathews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-8 text-center">
            About Torah Mathews
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Torah Mathews is an author, speaker, and trauma recovery advocate
              whose testimony of transforming pain into power is reshaping how
              leaders and organizations approach healing. Having walked through
              childhood wounds, heartbreak, betrayal, financial devastation, and
              spiritual warfare, she encountered God in a way that transformed
              everything — and now equips others to do the same.
            </p>
            <p>
              Through Rise To Thrive Academy and her{" "}
              <span className="font-semibold">
                Transforming Pain Into Power™
              </span>{" "}
              mission, Torah helps individuals, churches, nonprofits, and
              frontline organizations break trauma cycles, restore emotional
              health, and rebuild identity through trauma-informed,
              faith-centered principles.
            </p>
            <p>
              Drawing on a corporate leadership background, an MBA, and her work
              as a trauma recovery advocate, she brings both professional rigor
              and lived compassion to every retreat — meeting helping
              professionals with the depth, dignity, and faith their recovery
              deserves.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md bg-[#b18c57] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#9a7549]"
            >
              Read Torah&apos;s Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Recognition & Media Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-4 text-center">
            Recognition &amp; Media Features
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
            A leader recognized for her impact, her credentials, and her
            commitment to faith-centered recovery.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Most Influential Women",
                body: "Recognition, nomination, and finalist mentions honoring her influence and leadership.",
              },
              {
                title: "Corporate Leadership",
                body: "A professional background in corporate leadership informing her work with organizations.",
              },
              {
                title: "MBA",
                body: "Master of Business Administration, bringing strategic and organizational depth.",
              },
              {
                title: "AACC Member",
                body: "Member of the American Association of Christian Counselors.",
              },
              {
                title: "Published Author",
                body: "Author of Transforming Pain Into Power, a testimony of trauma, faith, and restoration.",
              },
              {
                title: "Trauma Recovery Advocate",
                body: "A dedicated advocate for trauma recovery, resilience, and spiritual inner healing.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/recognition-media"
              className="inline-flex items-center justify-center rounded-md bg-[#209bab] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#1a7a86]"
            >
              View Recognition &amp; Media
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA Section + Inquiry Form */}
      <section id="inquiry" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-4 text-center">
            Invite Torah Mathews
          </h2>
          <p className="text-lg text-slate-700 text-center leading-relaxed mb-10">
            Invite Torah Mathews to facilitate a retreat, training, or leadership
            recovery experience for your team. Share a few details below and her
            team will respond with retreat information tailored to your
            organization.
          </p>
          <RetreatInquiryForm />
        </div>
      </section>
    </main>
  );
}
