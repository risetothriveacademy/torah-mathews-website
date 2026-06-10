import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Churches - Torah Mathews",
  description: "Trauma-informed ministry guidance for churches supporting members in emotional distress.",
};

export default function ChurchPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">For Churches & Ministries</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating trauma-informed, emotionally safe spaces for healing and restoration.
          </p>
        </div>

        <section className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-3xl font-bold text-[#b18c57] mb-6">
            Trauma-Informed Ministry
          </h2>
          <p className="text-lg text-gray-700 mb-4 font-semibold">
            Trauma-informed ministry means:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• avoiding spiritual pressure or shame</li>
            <li>• creating emotionally safe environments</li>
            <li>• understanding triggers</li>
            <li>• using scripture with compassion</li>
            <li>• validating emotional wounds</li>
            <li>• supporting inner healing</li>
            <li>• avoiding toxic positivity</li>
            <li>• recognizing nervous system overwhelm</li>
          </ul>
          <p className="text-lg text-gray-700 font-semibold">
            The church should be the safest place for the wounded.
          </p>
        </section>

        {/* Related Pages */}
        <section className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#b18c57]">
            Explore More
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/professional-retreat"
              className="block rounded-lg border-t-4 border-[#209bab] bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 font-semibold text-[#209bab]">Professional Retreat</h3>
              <p className="text-sm text-gray-700">A faith-informed, trauma-informed recovery & resilience retreat for helping professionals.</p>
            </a>
            <a
              href="/speaking"
              className="block rounded-lg border-t-4 border-[#209bab] bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 font-semibold text-[#209bab]">Speaking</h3>
              <p className="text-sm text-gray-700">Book Torah to speak on trauma-informed, faith-centered healing and restoration.</p>
            </a>
            <a
              href="/corporate-sponsorships"
              className="block rounded-lg border-t-4 border-[#209bab] bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 font-semibold text-[#209bab]">Corporate Sponsorships</h3>
              <p className="text-sm text-gray-700">Partner with the mission to fund trauma recovery and faith-based wellness.</p>
            </a>
            <a
              href="/non-clinicians"
              className="block rounded-lg border-t-4 border-[#209bab] bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-2 font-semibold text-[#209bab]">Supporting Someone in Trauma</h3>
              <p className="text-sm text-gray-700">Practical guidance for family, friends, and community supporters.</p>
            </a>
          </div>
        </section>

        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Creating Safe Spaces for Healing</h2>
          <p className="text-xl max-w-3xl mx-auto">
            When the church understands trauma, it becomes a place of true refuge and restoration.
          </p>
        </div>
      </div>
    </div>
  );
}
