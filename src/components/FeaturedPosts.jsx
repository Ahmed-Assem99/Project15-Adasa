import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import postsData from "../posts.json";
import PostCard from "./PostCard";

export default function FeaturedPosts() {
  const featuredPosts = postsData.posts.filter((post) => post.featured);

  return (
    <section dir="rtl" className="bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* badge — dir locked to ltr so justify-end means physical right */}
        <div dir="ltr" className="mb-4 flex justify-end">
          <span dir="rtl" className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs font-semibold text-orange-500">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500/50" />
            </span>
            مميز
          </span>
        </div>

        {/* header row — dir locked to ltr so button stays left and heading stays right */}
        <div dir="ltr" className="flex items-end justify-between gap-4">
          <NavLink
            to="blog"
            dir="rtl"
            className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-neutral-500"
          >
            <ArrowLeft className="h-4 w-4" />
            عرض الكل
          </NavLink>

          <div dir="rtl" className="text-right">
            <h2 className="text-3xl font-bold text-white">مقالات مختارة</h2>
            <p className="mt-1 text-neutral-400">
              محتوى مميز لبدء رحلة تعلمك
            </p>
          </div>
        </div>

        {/* posts */}
        <div className="mt-10">
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}