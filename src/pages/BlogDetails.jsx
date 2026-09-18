import { useParams, Link } from "react-router-dom";
import postsData from "../posts.json";
import BlogDetailSidebar from "../components/BlogDetailSidebar";
import BlogDetailContent from "../components/BlogDetailContent";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = postsData.posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section dir="rtl" className="bg-[#050505] px-6 py-24 text-center">
        <div className="mx-auto max-w-xl rounded-[28px] border border-neutral-800 bg-[#111111]/80 p-10">
          <h1 className="text-3xl font-black text-white">المقال غير موجود</h1>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
          >
            العودة إلى المدونة
          </Link>
        </div>
      </section>
    );
  }

  const sidebarItems = post.content
    .split("\n\n")
    .filter(Boolean)
    .map((block, index) => {
      if (!block.startsWith("## ")) return null;
      return {
        id: block
          .replace("## ", "")
          .toLowerCase()
          .replace(/[^\u0621-\u064A\w\s-]/g, "")
          .replace(/\s+/g, "-"),
        title: block.replace("## ", ""),
        index,
      };
    })
    .filter(Boolean);

  return (
    <main dir="rtl" className="min-h-screen bg-[#050505] px-4 pb-16 pt-28 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section className="min-w-0">
            <BlogDetailContent post={post} />
          </section>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <BlogDetailSidebar items={sidebarItems} />
          </aside>
        </div>
      </div>
    </main>
  );
}