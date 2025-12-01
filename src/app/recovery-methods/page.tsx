import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recovery Methods",
  description: "Faith-based coaching, therapeutic tools, and next steps for your recovery journey",
};

export default function RecoveryMethodsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Recovery Methods</h1>

        <div className="space-y-8">
          {/* Faith-Based Coaching */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18c57]">
              Faith-Based Coaching
            </h2>
            <p className="text-gray-700 text-lg">
              [Placeholder: Information about faith-based trauma recovery coaching will be added here]
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#209bab]">One-on-One Coaching</h3>
                <p className="text-gray-600">[Details coming soon]</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#209bab]">Group Sessions</h3>
                <p className="text-gray-600">[Details coming soon]</p>
              </div>
            </div>
          </div>

          {/* Therapeutic Tools */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#209bab]">
              Therapeutic Tools
            </h2>
            <p className="text-gray-700 text-lg">
              [Placeholder: Resources and therapeutic approaches will be added here]
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Prayer and meditation practices</li>
              <li>• Journaling exercises</li>
              <li>• Scripture-based healing techniques</li>
              <li>• Community support groups</li>
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18c57]">
              Next Steps
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              [Placeholder: Information about starting your recovery journey will be added here]
            </p>
            <button className="bg-[#209bab] text-white px-6 py-3 rounded-md hover:bg-[#1a7a86] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
