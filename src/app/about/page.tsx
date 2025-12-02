import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Torah Mathews",
  description:
    "A story of trauma, redemption, and God's transforming power.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-16 mx-auto max-w-5xl lg:px-8">
        {/* Hero */}
        <header className="mb-12">
          <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
            About Torah Mathews
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A story of trauma, redemption, and God's transforming power.
          </h1>
        </header>

        {/* Who I Am */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Who I Am
          </h2>
          <p className="text-slate-700 leading-relaxed">
            My name is Torah Mathews, and my story is not one of perfection — it is one of redemption.
            I grew up in an environment marked by instability, emotional unpredictability, and silent wounds.
            I learned to survive by staying strong and quiet — long before I ever learned how to heal.
          </p>
        </section>

        {/* Childhood & Early Life */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Childhood & Early Life — The Silent Wounds
          </h2>
          <p className="text-slate-700 leading-relaxed">
            My childhood taught me to:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>suppress emotions</li>
            <li>overachieve</li>
            <li>avoid conflict</li>
            <li>remain silent</li>
            <li>take care of others more than myself</li>
            <li>survive instead of feel</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            These patterns followed me into adulthood, shaping my identity and relationships.
          </p>
        </section>

        {/* Adulthood */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Adulthood — The Breaking Point
          </h2>
          <p className="text-slate-700 leading-relaxed">
            I lived with:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>perfectionism</li>
            <li>people-pleasing</li>
            <li>emotional silence</li>
            <li>high self-pressure</li>
            <li>unresolved trauma</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Trauma, betrayal, heartbreak, and devastating spiritual warfare eventually brought my life to collapse.
          </p>
          <p className="text-slate-700 leading-relaxed font-semibold">
            But that is exactly where God met me.
          </p>
        </section>

        {/* The Turning Point */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            The Turning Point — When God Stepped In
          </h2>
          <p className="text-slate-700 leading-relaxed">
            God began to reveal:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>why I reacted the way I did</li>
            <li>where shame lived</li>
            <li>how trauma shaped my identity</li>
            <li>how spiritual warfare targeted old wounds</li>
            <li>who I truly was in Him</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Healing came layer by layer. He restored:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>fear</li>
            <li>shame</li>
            <li>trauma-based thinking</li>
            <li>emotional instability</li>
            <li>identity confusion</li>
            <li>spiritual heaviness</li>
          </ul>
        </section>

        {/* The Calling */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            The Calling — God's Instruction
          </h2>
          <p className="text-slate-700 leading-relaxed">
            During my healing, God gave me a clear instruction:
          </p>
          <blockquote className="border-l-4 border-teal-600 pl-6 italic text-lg my-6 bg-slate-50 py-4 rounded">
            "Testify of what I have done, and how I continue to move in your healing… let your story be the light that leads them back to Me."
          </blockquote>
          <p className="text-slate-700 leading-relaxed">
            This shifted my identity. My testimony became a mission.
          </p>
        </section>

        {/* The Mission */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            The Mission — Transforming Pain into Power™
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Today, Transforming Pain into Power™ is a faith-based mission to help others:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
            <li>break trauma cycles</li>
            <li>restore identity</li>
            <li>rebuild emotionally & spiritually</li>
            <li>deepen faith</li>
            <li>understand spiritual warfare</li>
            <li>find hope again</li>
          </ul>
        </section>

        {/* Who I Am Today */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            Who I Am Today
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>I am not who trauma said I was.</p>
            <p>I am restored.</p>
            <p>I am healed.</p>
            <p>I am called.</p>
            <p>I am equipped.</p>
            <p>I am transformed.</p>
            <p className="font-semibold mt-6">
              And now, I help others rise into the lives God designed for them.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
