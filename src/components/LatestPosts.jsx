import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import postsData from "../posts.json";
import LatestPostCard from "./LatestPostCard";

export default function LatestPosts() {
  const latestPosts = [...postsData.posts]
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section dir="rtl" className="bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* badge */}
        <div dir="ltr" className="mb-4 flex justify-end">
          <span dir="rtl" className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs font-semibold text-orange-500">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500/50" />
            </span>
            الأحدث
          </span>
        </div>

        {/* header row */}
        <div dir="ltr" className="flex items-end justify-between gap-4">
          <NavLink
            to="blog"
            dir="rtl"
            className="flex shrink-0 items-center gap-2 text-sm font-bold text-orange-500 transition-colors hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            عرض جميع المقالات
          </NavLink>

          <div dir="rtl" className="text-right">
            <h2 className="text-3xl font-bold text-white">أحدث المقالات</h2>
            <p className="mt-1 text-neutral-400">
              محتوى جديد طازج من المطبعة
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {latestPosts.map((post) => (
            <LatestPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}