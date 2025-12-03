import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Torah Mathews - Speaker",
  description: "Book Torah Mathews for speaking engagements, conferences, and events",
};

export default function SpeakerPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Torah Mathews - Speaker</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://ext.same-assets.com/2919366046/4227104037.jpeg"
              alt="Torah Mathews - Speaker"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6 text-[#b18c57]">
              Faith-Based Trauma Recovery Speaker
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              Torah Mathews delivers powerful, life-changing messages for conferences, churches,
              corporate teams, and mental health events. Her testimony of overcoming devastating loss
              inspires audiences to find hope and healing through faith.
            </p>

            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-[#209bab]">Speaking Topics:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Transforming Pain Into Power</li>
                <li>• Faith-Based Trauma Recovery</li>
                <li>• Overcoming Anxiety, Depression, and Grief</li>
                <li>• Spiritual Resilience for Business Owners</li>
                <li>• Finding Hope in Devastating Circumstances</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#b18c57]">Book Torah for Your Event</h2>
          <p className="text-gray-700 mb-6">
            Torah speaks at conferences, corporate trainings, church services, leadership retreats,
            and mental health events. Her message is relatable, powerful, and rooted in biblical truth.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#209bab]">🎤</div>
              <h3 className="font-semibold mb-2">Conferences</h3>
              <p className="text-sm text-gray-600">Keynote speaking and breakout sessions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#b18c57]">⛪</div>
              <h3 className="font-semibold mb-2">Churches</h3>
              <p className="text-sm text-gray-600">Sunday services and special events</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#209bab]">🏢</div>
              <h3 className="font-semibold mb-2">Corporate</h3>
              <p className="text-sm text-gray-600">Wellness programs and team events</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#209bab] to-[#b18c57] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Invite Torah to Speak</h2>
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
