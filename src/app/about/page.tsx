import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Torah Mathews",
  description:
    "Learn about Torah Mathews' journey through trauma, loss, and faith-based healing, and how it led to a calling to help others recover emotionally, financially, and spiritually.",
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
            Transforming Pain into Power through Faith, Trauma Recovery, and
            Mental Health Advocacy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            I&apos;ve walked through grief, financial loss, trauma-induced
            mental distress, and the collapse of everything I thought was
            secure. Yet in the darkest places of my story, God was quietly
            writing my calling—to help others find healing through a holistic,
            faith-centered approach to recovery.
          </p>
        </header>

        {/* Childhood & Teenage Years */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Childhood and Early Years
          </h2>
          <p className="text-slate-700 leading-relaxed">
            I grew up in a middle-income family rooted in strong Christian
            values. My father was a quiet, steady presence—compassionate,
            generous, and committed to our family despite financial struggles
            and national unrest. Educated in the UK, he encouraged me to pursue
            my studies, embrace independence, and think for myself. His wisdom,
            often expressed through actions more than words, deeply shaped my
            character and resilience.
          </p>
          <p className="text-slate-700 leading-relaxed">
            On <span className="font-semibold">November 14th, 1985</span>, my
            life changed in a single day. My father suffered a sudden aneurysm
            that led to a stroke, taking his mobility, speech, and sight within
            hours. His passing shattered the stability of our home. At just 20
            years old, I was thrust into managing our family&apos;s finances and
            responsibilities. There was no time to grieve—I stepped into adult
            roles overnight, carrying a weight no young woman should have to
            bear.
          </p>
        </section>

        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">Teenage Years</h2>
          <p className="text-slate-700 leading-relaxed">
            My mother, overwhelmed by grief, struggled to cope with the loss.
            My older brother, once prepared to carry the family legacy, spiraled
            into addiction. His alcoholism and abuse created a volatile
            environment, and I found myself trying to hold everything together
            while shielding the chaos from the outside world.
          </p>
          <p className="text-slate-700 leading-relaxed">
            I lived with constant fear—fear of financial collapse, emotional
            explosions, and what might happen next. Despite stepping up to
            manage the family&apos;s responsibilities, I was often overlooked.
            My mother continued to favour my brother, even as his addiction
            worsened. The combination of grief, instability, and emotional abuse
            left deep marks on my early adulthood and wired my mind to survive
            at all costs.
          </p>
        </section>

        {/* Early Career & The Rise */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Early Career: Survival Disguised as Success
          </h2>
          <p className="text-slate-700 leading-relaxed">
            What looked like early ambition was, in reality, survival. Driven by
            a deep need to protect and provide, I launched my first corporate
            services start-up at just 22 years old. What began as a small,
            uncertain venture grew to serve more than 200 local and international
            clients. It was built on grit, sacrifice, and the belief that if I
            worked hard enough, I could keep everyone safe.
          </p>
          <p className="text-slate-700 leading-relaxed">
            After selling that company to a multinational, I rebuilt in a new
            environment and eventually launched a second business. Over the next
            two decades, that business flourished, providing strong income,
            stability, and opportunities for my family. We built what many would
            call a successful life. On the surface, it looked like I had made
            it—but underneath, unresolved trauma still drove my decisions.
          </p>
        </section>

        {/* The Collapse & Mental Health Battle */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            When Everything Collapsed
          </h2>
          <p className="text-slate-700 leading-relaxed">
            As global crises unfolded and economic conditions worsened, the
            foundation I had spent years building began to crumble. Markets
            shifted, investments deteriorated, and within months, the business I
            had poured my life into collapsed. My financial security evaporated,
            and with it, the identity I had built around being strong,
            successful, and in control.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The pressure as a sole provider became unbearable. I spiraled into
            severe anxiety and depression, experiencing trauma-induced mental
            distress that affected every part of my life. My body bore the
            symptoms—rapid weight loss, tremors, sleepless nights. My mind felt
            trapped in a constant state of overdrive. I was eventually diagnosed
            with clinical anxiety and depression, but I knew what I was facing
            went deeper than a diagnosis. It was emotional, physical, and
            deeply spiritual.
          </p>
          <p className="text-slate-700 leading-relaxed">
            This season became the darkest valley I had ever walked through—and
            yet, it was here that God began to reveal the true purpose of my
            life.
          </p>
        </section>

        {/* Calling & Mission */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            From Pain to Calling: A Holistic View of Recovery
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Through my own battle with trauma-induced mental distress, I
            discovered that recovery cannot be limited to one dimension. True
            healing requires a holistic approach:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li>
              <span className="font-semibold">Physiological healing</span> to
              support the body and nervous system.
            </li>
            <li>
              <span className="font-semibold">Psychological healing</span> to
              address trauma, thought patterns, and emotional wounds.
            </li>
            <li>
              <span className="font-semibold">Spiritual healing</span> to
              restore identity, hope, and purpose through a living relationship
              with God.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            I came to understand what many Christians call the{" "}
            <span className="italic">battlefield of the mind</span>—the reality
            that mental distress is often entangled with spiritual warfare,
            negative influences, and lies that attack our identity in Christ.
            This revelation transformed my pain into a calling: to help others
            heal by integrating the spiritual aspect into recovery.
          </p>
        </section>

        {/* Core Values & Vision */}
        <section className="space-y-6 mb-12">
          <h2 className="text-2xl font-semibold text-slate-900">
            Core Values & Vision
          </h2>
          <p className="text-slate-700 leading-relaxed">
            I no longer live like a hamster on a wheel, chasing the next measure
            of success. I have seen firsthand how quickly worldly security can
            disappear. Today, my life is anchored in the only constant that has
            never failed me—God, my Father.
          </p>
          <p className="text-slate-700 leading-relaxed">
            My vision is to help others find peace, purpose, and wholeness by
            embracing a holistic, faith-based approach to recovery. I am deeply
            committed to equipping Christian business owners, entrepreneurs,
            professionals, churches, and families with tools to support those
            facing anxiety, depression, stagnation, grief, and trauma-induced
            mental distress.
          </p>
          <p className="text-slate-700 leading-relaxed">
            I believe every trial we endure can become a testimony. I no longer
            regret the experiences I&apos;ve walked through. I see them as part
            of God&apos;s preparation—evidence that He trusted me to carry a
            message of healing to His children who are walking through
            darkness.
          </p>
        </section>

        {/* Legacy & Impact */}
        <section className="space-y-6 mb-16">
          <h2 className="text-2xl font-semibold text-slate-900">
            Legacy & Impact: Transforming Pain Into Power
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Today, I dedicate my life, my story, and my remaining resources to
            creating pathways of healing for others. Through courses, speaking,
            written resources, and future retreats, my heart is to:
          </p>
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li>
              Raise awareness about trauma-induced mental distress and the
              spiritual battles behind it.
            </li>
            <li>
              Equip Christian leaders, families, and communities with practical,
              faith-based tools for supporting recovery.
            </li>
            <li>
              Advocate for holistic approaches that honor the physiological,
              psychological, and spiritual aspects of healing.
            </li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            My story is not one of perfection or instant victory—it is a journey
            of walking with God through loss, questions, and rebuilding. If you
            are in a place of pain or confusion right now, I want you to know:
            you are not alone, you are not forgotten, and there is hope for
            healing and restoration.
          </p>
        </section>
      </section>
    </main>
  );
}
