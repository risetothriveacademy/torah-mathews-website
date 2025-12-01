import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Torah Mathews",
  description: "Faith-based insights on trauma recovery, mental health, and spiritual healing",
};

const dummyPosts = [
  {
    id: 1,
    title: "Finding Hope in the Midst of Trauma",
    excerpt: "[Placeholder: Blog post about hope and faith during difficult times]",
    date: "2024-01-15",
    category: "Faith & Recovery",
  },
  {
    id: 2,
    title: "Understanding the Effects of Emotional Trauma",
    excerpt: "[Placeholder: Educational content about trauma and its impact]",
    date: "2024-01-10",
    category: "Mental Health",
  },
  {
    id: 3,
    title: "Biblical Foundations for Healing",
    excerpt: "[Placeholder: Scripture-based approaches to recovery]",
    date: "2024-01-05",
    category: "Spiritual Healing",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">
          Insights, resources, and encouragement for your healing journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#209bab] to-[#b18c57]"></div>
              <div className="p-6">
                <div className="text-sm text-[#209bab] font-semibold mb-2">
                  {post.category}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-[#209bab] hover:text-[#1a7a86] font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            [More blog posts will be added soon]
          </p>
        </div>
      </div>
    </div>
  );
}
