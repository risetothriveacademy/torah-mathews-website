import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trauma and Mental Health",
  description: "Understanding trauma, emotional impact, and faith-based healing approaches",
};

export default function TraumaAndMentalHealthPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Trauma and Mental Health</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Understanding Trauma */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#209bab]">
              Understanding Trauma
            </h2>
            <p className="text-gray-700">
              [Placeholder: Content about understanding trauma and its effects will be added here]
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Types of trauma</li>
              <li>• Trauma responses</li>
              <li>• Long-term effects</li>
            </ul>
          </div>

          {/* Emotional Impact */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#b18c57]">
              Emotional Impact
            </h2>
            <p className="text-gray-700">
              [Placeholder: Information about emotional and psychological effects will be added here]
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Anxiety and depression</li>
              <li>• PTSD symptoms</li>
              <li>• Relationship impacts</li>
            </ul>
          </div>

          {/* Faith & Healing */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#209bab]">
              Faith & Healing
            </h2>
            <p className="text-gray-700">
              [Placeholder: Faith-based approaches to healing and recovery will be added here]
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Biblical foundations</li>
              <li>• Prayer and meditation</li>
              <li>• Community support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
