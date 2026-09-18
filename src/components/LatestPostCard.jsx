import { NavLink } from "react-router-dom";
import { Clock, ChevronLeft } from "lucide-react";

export default function LatestPostCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <NavLink
      to={`blog/${post.slug}`}
      dir="rtl"
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition-colors duration-300 hover:border-orange-500"
    >
      {/* image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute right-3 top-3 rounded-full bg-neutral-950/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {post.category}
        </span>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-5">
        {/* meta row */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
          <span className="text-neutral-700">•</span>
          <span>{formattedDate}</span>
        </div>

        {/* title */}
        <h3 className="mt-3 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-500">
          {post.title}
        </h3>

        {/* excerpt */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
          {post.excerpt}
        </p>

        {/* footer */}
        <div className="mt-5 flex items-center gap-3 border-t border-neutral-800 pt-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-sm font-semibold text-white">
              {post.author.name}
            </div>
            <div className="text-xs text-neutral-500">
              {post.author.role}
            </div>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-orange-500 transition-transform duration-300 group-hover:-translate-x-1 group-hover:border-orange-500">
            <ChevronLeft className="h-4 w-4" />
          </span>
        </div>
      </div>
    </NavLink>
  );
}