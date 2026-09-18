import { NavLink } from "react-router-dom";
import { Clock, Star, ArrowLeft } from "lucide-react";

export default function PostCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
  });

  return (
    <NavLink
      to={`blog/${post.slug}`}
      dir="ltr"
      className="group mb-6 flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition-colors duration-300 hover:border-orange-500 sm:flex-row"
    >
      {/* text column (left) */}
      <div dir="rtl" className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* meta row */}
          <div dir="ltr" className="flex items-center justify-end gap-3">
            <span className="flex items-center gap-1 text-xs text-neutral-500">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
              {post.category}
            </span>
          </div>

          {/* title */}
          <h3 className="mt-4 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-500">
            {post.title}
          </h3>

          {/* excerpt */}
          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {post.excerpt}
          </p>
        </div>

        {/* footer row */}
        <div dir="ltr" className="mt-6 flex items-center justify-between">
          <span dir="rtl" className="flex items-center gap-2 text-sm font-semibold text-orange-500">
            اقرأ المقال
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </span>

          <div dir="rtl" className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="text-right">
              <div className="text-sm font-semibold text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-neutral-500">{formattedDate}</div>
            </div>
          </div>
        </div>
      </div>

      {/* image column (right) */}
      <div className="relative h-56 w-full overflow-hidden sm:h-auto sm:w-80 sm:shrink-0">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {post.featured && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1 text-xs font-bold text-white">
            مميز
            <Star className="h-3 w-3 fill-white" />
          </span>
        )}
      </div>
    </NavLink>
  );
}