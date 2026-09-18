import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const categoryStyleMap = {
  "إضاءة": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "بورتريه": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "مناظر طبيعية": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "تقنيات": "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "معدات": "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post, compact = false }) {
  const image =
    typeof post.image === "string" ? post.image : post.image?.src || "";

  if (compact) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-[26px] border border-neutral-800 bg-neutral-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_16px_30px_rgba(249,115,22,0.12)]"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-transparent to-transparent" />
          <span
            className={`absolute right-3 top-3 inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold ${categoryStyleMap[post.category] || "border-neutral-700 bg-neutral-800/80 text-neutral-200"}`}
          >
            {post.category}
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between gap-3 text-[11px] text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </div>
            <div>{formatDate(post.date)}</div>
          </div>

          <h3 className="line-clamp-2 text-xl font-bold leading-snug text-white transition group-hover:text-orange-400">
            {post.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-7 text-neutral-400">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between gap-3 border-t border-neutral-800 pt-4">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-neutral-700"
              />
              <div className="text-right text-xs">
                <div className="font-semibold text-white">{post.author.name}</div>
                <div className="text-neutral-500">{post.author.role}</div>
              </div>
            </div>

            <span className="flex items-center gap-1 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-xs font-bold text-orange-400 transition group-hover:border-orange-400 group-hover:bg-orange-500/20">
              اقرأ المزيد
              <ArrowLeft className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-[26px] border border-neutral-800 bg-neutral-900/60 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_16px_30px_rgba(249,115,22,0.12)]"
    >
      <div className="flex flex-col gap-0 md:flex-row">
        <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-[42%]">
          <img
            src={image}
            alt={post.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
          <span
            className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold ${categoryStyleMap[post.category] || "border-neutral-700 bg-neutral-800/80 text-neutral-200"}`}
          >
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3 text-[11px] text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </div>
              <div>{formatDate(post.date)}</div>
            </div>

            <h3 className="text-[28px] font-black leading-tight text-white transition group-hover:text-orange-400">
              {post.title}
            </h3>

            <p className="mt-4 line-clamp-3 text-base leading-8 text-neutral-400">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-neutral-800 pt-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 transition group-hover:text-orange-300">
              اقرأ المقال
              <ArrowLeft className="h-4 w-4" />
            </span>

            <div className="flex items-center gap-3 text-right">
              <div>
                <div className="text-sm font-semibold text-white">{post.author.name}</div>
                <div className="text-xs text-neutral-500">{post.author.role}</div>
              </div>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-neutral-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
