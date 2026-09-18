import { useParams, NavLink } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import postsData from "../posts.json";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = postsData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section dir="rtl" className="bg-neutral-950 px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">المقال غير موجود</h1>
        <NavLink
          to="/blog"
          className="mt-4 inline-flex items-center gap-2 text-orange-500 hover:text-orange-400"
        >
          العودة إلى المدونة
          <ArrowRight className="h-4 w-4 rotate-180" />
        </NavLink>
      </section>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // split the raw content into paragraph / heading blocks
  const blocks = post.content.split("\n\n").filter(Boolean);

  return (
    <article dir="rtl" className="bg-neutral-950 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* back link */}
        <NavLink
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors hover:text-orange-500"
        >
          العودة إلى المدونة
          <ArrowRight className="h-4 w-4 rotate-180" />
        </NavLink>

        {/* category */}
        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
          {post.category}
        </span>

        {/* title */}
        <h1 className="mt-4 text-3xl font-bold leading-snug text-white sm:text-4xl">
          {post.title}
        </h1>

        {/* meta row */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
          <span className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span>
              <span className="font-semibold text-white">
                {post.author.name}
              </span>
              <span className="block text-xs text-neutral-500">
                {post.author.role}
              </span>
            </span>
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        {/* hero image */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>

        {/* content */}
        <div className="mt-10 space-y-5">
          {blocks.map((block, i) =>
            block.startsWith("## ") ? (
              <h2 key={i} className="pt-4 text-2xl font-bold text-white">
                {block.replace("## ", "")}
              </h2>
            ) : (
              <p key={i} className="leading-loose text-neutral-300">
                {block}
              </p>
            )
          )}
        </div>

        {/* tags */}
        {post.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-neutral-800 pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}