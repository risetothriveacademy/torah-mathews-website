import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Book Torah Mathews to Speak",
  description: "Trauma-informed, faith-centered, Spirit-led teaching that brings emotional and spiritual transformation.",
};

export default function SpeakingPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Book Torah Mathews to Speak</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trauma-informed, faith-centered, Spirit-led teaching that brings emotional and spiritual transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:admin@torahmathews.com?subject=Speaking Request">
              <Button size="lg" className="bg-[#209bab] hover:bg-[#1a7a86] text-white">
                Request Availability
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Download Media Kit
            </Button>
          </div>
        </div>

        {/* Who Torah Speaks To */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-8 text-center">Who Torah Speaks To</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#209bab]">A. Churches & Ministries</h3>
              <p className="text-gray-700">
                Trauma-informed teaching through a biblical lens.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#b18c57]">B. Corporations & Leadership</h3>
              <p className="text-gray-700">
                Workplace trauma, burnout recovery, emotional intelligence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#209bab]">C. Nonprofits & Survivor Groups</h3>
              <p className="text-gray-700">
                Support for vulnerable communities and recovery groups.
              </p>
            </div>
          </div>
        </section>

        {/* Signature Topics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-8 text-center">Signature Topics</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#209bab]">1. Transforming Pain into Power</h3>
              <p className="text-gray-700">
                Torah's testimony — powerful, emotional, transformative.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#b18c57]">2. The Unseen Battle</h3>
              <p className="text-gray-700">
                Trauma, spiritual warfare, identity wounds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#209bab]">3. Rewiring the Mind Through Faith</h3>
              <p className="text-gray-700">
                Breaking fear, shame, anxiety, rejection, and trauma cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Why Event Organizers Love Working With Torah */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6 text-center">
            Why Event Organizers Love Working With Torah
          </h2>
          <ul className="space-y-3 text-gray-700 text-lg max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-[#209bab] mr-3">✓</span>
              <span>Biblically grounded</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#209bab] mr-3">✓</span>
              <span>Trauma-informed</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#209bab] mr-3">✓</span>
              <span>Compassionate & safe</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#209bab] mr-3">✓</span>
              <span>Professional & clear</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#209bab] mr-3">✓</span>
              <span>Transformational impact</span>
            </li>
          </ul>
        </section>

        {/* Speaker Bio */}
        <section className="mb-16 bg-gradient-to-r from-teal-50 to-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Speaker Bio (Short)</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            Torah Mathews is an author and trauma-recovery advocate whose testimony of God's healing has helped countless individuals reclaim identity, emotional stability, and purpose.
          </p>
        </section>

        {/* Workshops & Breakouts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-8 text-center">Workshops & Breakouts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-[#209bab]">Healing Fear, Shame & Rejection</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-[#b18c57]">Breaking Generational Trauma</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-[#209bab]">Understanding Trauma in the Church</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2 text-[#b18c57]">Emotional Triggers & Subconscious Patterns</h3>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Invite Torah to Your Event</h2>
          <p className="text-xl mb-6">Transform your audience with a message of hope and restoration</p>
          <a href="mailto:admin@torahmathews.com?subject=Speaking Engagement Request">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              Request Booking
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
