import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { TVShowBanner } from "@/components/TVShowBanner";

export const metadata: Metadata = {
  title: "Torah Mathews - Transforming Pain into Power",
  description: "A journey of healing, identity, and faith. Torah Mathews is an author, speaker, and trauma recovery advocate whose testimony is transforming lives.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
          {/* Left Half - Book Cover Image */}
          <div
            className="relative h-[400px] md:h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/book-cover.jpg')",
            }}
          />

          {/* Right Half - Text Content */}
          <div className="flex items-center justify-end bg-white pl-12 md:pl-16 pr-8 md:pr-12 py-8">
            <div className="max-w-xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Transforming Pain into Power
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                A journey of healing, identity, and faith. Torah Mathews is an author, speaker, and trauma recovery advocate whose testimony is transforming lives.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="bg-[#209bab] text-white hover:bg-[#1a7a86] font-semibold px-8 py-6 text-base w-full"
                  >
                    Read the Book
                  </Button>
                </Link>
                <Link href="/speaking">
                  <Button
                    size="lg"
                    className="bg-[#b18c57] text-white hover:bg-[#9a7549] font-semibold px-8 py-6 text-base w-full"
                  >
                    Book Torah to Speak
                  </Button>
                </Link>
                <Link href="/trauma-mental-health">
                  <Button
                    size="lg"
                    className="bg-gray-900 text-white hover:bg-gray-800 font-semibold px-8 py-6 text-base w-full"
                  >
                    Explore Trauma Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TV Show Feature Banner */}
      <TVShowBanner />

      {/* Scrolling Banner */}
      <ScrollingBanner text="A Legacy in Honour of Jesus Christ — Together We Rise Against Pain, Grief, Depression, Anxiety, Abuse & Poverty." />

      {/* Meet Torah Mathews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-8 text-center">
            Meet Torah Mathews
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Torah Mathews survived childhood wounds, heartbreak, betrayal, financial devastation, and overwhelming spiritual warfare — and encountered God in a way that transformed everything.
            </p>
            <div className="bg-[#209bab]/10 p-6 rounded-lg border-l-4 border-[#209bab]">
              <p className="font-semibold text-xl text-gray-900 mb-2">Her message is simple:</p>
              <p className="text-lg">Your story is not over. God can rebuild you from the deepest pain.</p>
            </div>
            <p>
              Today she helps individuals, churches, and organizations break trauma cycles, restore emotional health, and rebuild identity through faith-based principles.
            </p>
          </div>
        </div>
      </section>

      {/* Transforming Pain into Power (The Book) Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-6">
            Transforming Pain into Power (The Book)
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Discover Torah's full testimony in <span className="font-semibold">Transforming Pain into Power</span> — a raw and powerful story of trauma, faith, and God's restoration.
          </p>
          <Link href="/book">
            <Button
              size="lg"
              className="bg-[#209bab] text-white hover:bg-[#1a7a86] font-semibold px-8 py-6 text-lg"
            >
              Read the Book
            </Button>
          </Link>
        </div>
      </section>

      {/* Speaking & Keynotes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-6">
            Speaking & Keynotes
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Invite Torah to bring trauma-informed, faith-based emotional healing to your church, conference, or organization.
          </p>
          <Link href="/speaking">
            <Button
              size="lg"
              className="bg-[#b18c57] text-white hover:bg-[#9a7549] font-semibold px-8 py-6 text-lg"
            >
              Speaking Info
            </Button>
          </Link>
        </div>
      </section>

      {/* Trauma & Mental Health Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-[#b18c57] mb-6">
            Trauma & Mental Health Education
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Learn how trauma affects the mind, body, identity, and spiritual life — and how healing begins.
          </p>
          <Link href="/trauma-mental-health">
            <Button
              size="lg"
              className="bg-[#209bab] text-white hover:bg-[#1a7a86] font-semibold px-8 py-6 text-lg"
            >
              Explore Trauma Resources
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
