import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support for Non-Clinicians",
  description: "Resources for pastors, ministry leaders, families, and communities supporting those with trauma",
};

export default function NonCliniciansPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Support for Non-Clinicians</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Resources and guidance for those supporting individuals with trauma, even without clinical training
        </p>

        <div className="space-y-8">
          {/* Pastors & Ministry Leaders */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18c57]">
              Pastors & Ministry Leaders
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              [Placeholder: Guidance for church leaders and ministry workers will be added here]
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Recognizing trauma in congregation members</li>
              <li>• Creating safe spaces for healing</li>
              <li>• Biblical counseling approaches</li>
              <li>• When to refer to professional help</li>
            </ul>
          </div>

          {/* Families */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#209bab]">
              Families
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              [Placeholder: Resources for family members supporting loved ones will be added here]
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Understanding your loved one's experience</li>
              <li>• Communication strategies</li>
              <li>• Setting healthy boundaries</li>
              <li>• Self-care for caregivers</li>
            </ul>
          </div>

          {/* Workplace & Community */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold mb-4 text-[#b18c57]">
              Workplace & Community
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              [Placeholder: Information for workplace and community support will be added here]
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Creating trauma-informed workplaces</li>
              <li>• Community support networks</li>
              <li>• Peer support training</li>
              <li>• Crisis response protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
