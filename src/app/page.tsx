import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { SectionBanner } from "@/components/SectionBanner";
import { TVShowBanner } from "@/components/TVShowBanner";

export const metadata: Metadata = {
  title: "Torah Mathews - Home",
  description: "Empowered by Faith: Support for Christian Business Owners and Entrepreneurs Facing Spiritual Challenges",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Professional Photo Background */}
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/torah-mathews-author.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Empowered by Faith: Support for Christian Business Owners and
            Entrepreneurs Facing Spiritual Challenges
          </h2>
          <Link href="/about">
            <Button
              size="lg"
              className="mt-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-base"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </section>

      {/* TV Show Feature Banner */}
      <TVShowBanner />

      {/* Scrolling Banner */}
      <ScrollingBanner text="A Legacy in Honour of Jesus Christ — Together We Rise Against Pain, Grief, Depression, Anxiety, Abuse & Poverty." />

      {/* Transform Your Pain Section - Dark Background with Signature & Quote */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Transform Text & Signature */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#209bab] mb-6 leading-tight">
                TRANSFORM YOUR PAIN
                <br />
                INTO POWER
              </h2>
              <div className="mt-8">
                {/* Cursive Signature Style */}
                <div className="text-[#b18c57] text-5xl md:text-6xl mb-4" style={{ fontFamily: 'cursive, "Brush Script MT", "Lucida Handwriting"' }}>
                  Torah Mathews
                </div>
                {/* Cross/Logo Decorative Element */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                  <div className="w-16 h-1 bg-[#b18c57]"></div>
                  <div className="text-[#209bab] text-4xl">✝</div>
                  <div className="w-16 h-1 bg-[#b18c57]"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Puzzle Quote */}
            <div className="text-white">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                <p className="mb-4">
                  EVERY PERSON IS A PUZZLE.
                  <br />
                  SOME ARE MISSING A FEW
                  <br />
                  JIGSAW PIECES; OTHERS ARE
                  <br />
                  MISSING ALMOST EVERYTHING.
                </p>
                <p className="mt-6">
                  BUT EACH AND EVERY PERSON
                  <br />
                  CAN BE HARVESTED WITH FAITH
                  <br />
                  TO CONSTRUCT A TOTUS ANIM-
                  <br />
                  EA, OR "WHOLE SOUL," WHICH
                  <br />
                  PROVIDES EVERLASTING LIFE TO
                  <br />
                  WHOMEVER POSSESSES IT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Text + Sitting Photo */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Banner */}
          <SectionBanner text="You Are Not Alone — Healing Begins When We Bring the Battle Into the Light." />

          <h2 className="text-4xl font-bold text-[#b18c57] mb-4 text-center">
            Core Values and Vision
          </h2>
          <h3 className="text-3xl font-semibold mb-12 text-center text-gray-900">
            Transforming Pain into Power
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Having lost everything—my business, my home, my savings, my
                  investment properties, and most importantly, my independence
                  and health—to circumstantial trauma, I made a commitment, with
                  the help and encouragement of fellow believers, to share my
                  testimony. My sole intent is to encourage other Christians who, like me,
                  continue to struggle with the lasting effects of trauma,
                  anxiety, depression, and grief.
                </p>
                <p>
                  When we reach the deepest pit of despair, we often come to
                  realize that what we build in our own strength can vanish in a
                  single moment.
                </p>
                <p>
                  As I continue this difficult journey, I remain aware that the emotional, physical, and
                  financial scars left by trauma can linger—haunting and hindering the path to full
                  recovery. Yet this reality should never stop us from reaching out to help one another.
                  Only those who have walked through the shadows of this affliction can truly
                  understand its paralyzing impact on every area of life.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/torah-mathews-quote.jpg"
                alt="Torah Mathews"
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-8 text-center">
            Did You Know?
          </h2>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#209bab] mt-2 flex-shrink-0"></div>
              <p>
                More than <strong>720,000 people die by suicide every year</strong>,
                and for each suicide, there are an estimated <strong>20 attempts</strong>.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#209bab] mt-2 flex-shrink-0"></div>
              <p>
                Among those diagnosed with mental illness,{" "}
                <strong>29% struggle with substance abuse</strong> involving
                alcohol or drugs.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#209bab] mt-2 flex-shrink-0"></div>
              <p>
                Research shows that individuals with untreated mental illness
                are at a higher risk of experiencing or exhibiting violence.{" "}
                <em>(Source: Global Mental Health Report, August 2024)</em>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-lg text-gray-700">
              Though I have been left with little in material terms, I cannot help but express
              my deepest gratitude to the only true <strong>Source of Hope—my loving Father,
              Jesus Christ</strong>.
            </p>
            <p className="text-lg text-gray-700">
              It was He who sustained me when despair tempted me toward suicide. It is He who
              gives me the strength to face each new day with faith.
            </p>
            <p className="text-lg text-gray-700 mt-6">
              You too can find encouragement and support through our <strong className="text-[#209bab]">faith-based recovery
              resources</strong>, designed to help you rebuild your emotional and spiritual foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Message of Hope */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-8 text-center">
            A Message of Hope
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-base text-center">
            <p>
              Recovery is not easy—but no matter how severe your anxiety,
              depression, or grief may be, you are not alone.
            </p>
            <p>
              Join the many believers in Christ who continue to find healing and
              renewal through prayer, fellowship, and resting in the{" "}
              <strong>shelter of our Heavenly Father</strong>, who promises that:
            </p>
            <blockquote className="border-l-4 border-[#209bab] pl-6 italic text-lg my-8 bg-white py-6 rounded-r-lg text-left max-w-2xl mx-auto">
              "My grace is sufficient for you, for My power is made perfect in
              weakness."
              <footer className="text-sm mt-2 not-italic text-gray-600">
                — 2 Corinthians 12:9 (NLV)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* My Testimony Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-6">
            My Testimony
          </h2>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Transforming Pain Into Power - Kindle Edition
          </h3>
          <p className="text-lg text-gray-700 mb-2">
            by <Link href="https://www.amazon.com/s/ref=dp_byline_sr_ebooks_1?ie=UTF8&field-author=Torah+Mathews&text=Torah+Mathews&sort=relevancerank&search-alias=digital-text" className="text-[#209bab] hover:underline font-semibold">Torah Mathews</Link> (Author)
          </p>
          <p className="text-gray-600">
            contact - <a href="mailto:admin@torahmathews.com" className="text-[#209bab] hover:underline">admin@torahmathews.com</a>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold text-[#b18c57] mb-12 text-center">
            What they say about Torah...
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I have known Torah for 13 years. She is a sweet and kind-hearted person who always greets me with cheer. She helped me when I was going through a very difficult and devastating divorce, lost everything, and an emotional wreck. She offered me guidance and support, helped me get back my confidence and emotional strength. She has a big heart and is always there to help others in need. Torah is a good Christian woman who believes in what she does and says. I am proud to endorse Torah.",
    author: "-R.D., ENGINEER",
  },
  {
    quote:
      "Thank you for all your care, kindness, and support over the last year! You've always been someone I look up to as a mom and successful entrepreneur! I am grateful to have had your strength and guidance. You are such a great friend.",
    author: "-K.G., PARTNER AT 33 SEVEN",
  },
  {
    quote:
      "I will tell you Torah has been my confidant, my 'go-to' person when I am down, when I am not sure what to do, when I'm confused and stressed, and when I want to sell everything and just disappear. Torah has been one person that I call, and somewhere, somehow, she has managed to just be Torah and figure out some kind of way to explain my worry at the time. She always takes the calls and always takes the time to listen. She is great at troubleshooting a problem and working with me to get a positive outcome. Torah is just amazing. She is a professional who brings a wealth of knowledge, a Christian who is compassionate to do what God has called her to. Seriously amazing — in fact, I think amazing is not even the right word.",
    author: "-F.M., REGISTERED NURSE",
  },
];
