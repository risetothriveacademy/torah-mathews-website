import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Torah Mathews - Author",
  description: "Learn about Torah Mathews' book Transforming Pain Into Power",
};

export default function AuthorPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Torah Mathews - Author</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-semibold mb-6 text-[#b18c57]">
                Transforming Pain Into Power
              </h2>
              <h3 className="text-xl text-gray-700 mb-4">Kindle Edition</h3>

              <p className="text-gray-700 mb-6">
                This powerful memoir and recovery guide shares Torah's journey from devastating loss
                to restoration through faith. It's more than a story—it's a roadmap for anyone facing
                trauma, anxiety, depression, or grief.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-lg text-[#209bab]">Inside, you will discover:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• How to identify the hidden roots of emotional and financial distress</li>
                  <li>• The spiritual principles that unlock lasting healing and restoration</li>
                  <li>• Practical steps to rebuild your life—stronger, deeper, and purpose-driven</li>
                  <li>• Encouragement to trust God's process even when you can't see the outcome</li>
                </ul>
              </div>

              <Link href="https://www.amazon.com/dp/B0FNBTLQJ6" target="_blank">
                <Button className="w-full bg-[#209bab] hover:bg-[#1a7a86] text-white">
                  Get the Book on Amazon →
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://ext.same-assets.com/2919366046/4227104037.jpeg"
              alt="Torah Mathews"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#b18c57]">About the Book</h2>
          <p className="text-gray-700 mb-4">
            <strong>Transforming Pain into Power</strong> provides hope, scripture, and practical steps
            for those who feel trapped by grief, betrayal, financial collapse, or the weight of unhealed trauma.
          </p>
          <p className="text-gray-700">
            Each reflection reminds the reader that God redeems, restores, and renews — the journey to recovery
            is not easy, but even in the darkest valleys, God's presence will be the anchor.
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            by <Link href="https://www.amazon.com/s/ref=dp_byline_sr_ebooks_1?ie=UTF8&field-author=Torah+Mathews&text=Torah+Mathews&sort=relevancerank&search-alias=digital-text"
            className="text-[#209bab] hover:underline" target="_blank">Torah Mathews</Link> (Author)
          </p>
          <p className="text-gray-600">
            contact - <a href="mailto:admin@torahmathews.com" className="text-[#209bab] hover:underline">admin@torahmathews.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
