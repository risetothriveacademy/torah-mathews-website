import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Legacy Member - Torah Mathews",
  description: "Join the legacy of faith-based recovery and transformation",
};

export default function LegacyMemberPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Legacy Member</h1>

        <div className="bg-white rounded-lg shadow-xl p-12 text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://ext.same-assets.com/2919366046/713054921.png"
              alt="Torah Mathews Logo"
              className="h-32"
            />
          </div>

          <h2 className="text-3xl font-semibold mb-6 text-[#b18c57]">
            Join the Transforming Pain Into Power Legacy
          </h2>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Become part of a faith-based community dedicated to supporting trauma recovery,
            mental health healing, and spiritual restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#209bab]">What is Legacy Membership?</h3>
            <p className="text-gray-700 mb-4">
              Legacy Members are individuals who have committed to supporting the mission of
              Transforming Pain Into Power through prayer, financial support, and community engagement.
            </p>
            <p className="text-gray-700">
              Your legacy helps provide trauma recovery resources, training, and support to individuals
              and communities in need.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#b18c57]">Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Exclusive access to faith-based recovery resources</li>
              <li>• Priority registration for events and workshops</li>
              <li>• Monthly prayer and encouragement emails</li>
              <li>• Community connection with other believers</li>
              <li>• Impact reports on how your support is making a difference</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#b18c57]">
            Your Support Makes a Difference
          </h3>
          <p className="text-lg text-gray-700 text-center mb-6 max-w-3xl mx-auto">
            Every contribution helps provide hope and healing to those struggling with trauma,
            anxiety, depression, and grief. Together, we can transform pain into power.
          </p>
          <div className="text-center">
            <a href="mailto:admin@torahmathews.com?subject=Legacy Member Inquiry">
              <Button size="lg" className="bg-[#209bab] hover:bg-[#1a7a86] text-white">
                Become a Legacy Member
              </Button>
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            For more information, contact:{" "}
            <a href="mailto:admin@torahmathews.com" className="text-[#209bab] hover:underline">
              admin@torahmathews.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
