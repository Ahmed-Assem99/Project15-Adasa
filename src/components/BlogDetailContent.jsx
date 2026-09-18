import { ArrowLeft, CalendarDays, Clock, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogDetailContent({ post }) {
  const blocks = post.content.split("\n\n").filter(Boolean);
  const formattedDate = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-[28px] border border-[#2a2a2a] bg-[#121212]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#2a2a2a] bg-neutral-900">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.65) 100%), url(${post.image})`,
            }}
          />

          <div className="relative px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-7">
            <div className="mb-4 flex items-center justify-between gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-xs font-bold text-orange-300 transition hover:bg-orange-500/20"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                العودة إلى القائمة
              </Link>

              <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/90">
                <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-2 py-1 text-orange-300">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-black/25 px-2 py-1">
                  <CalendarDays className="h-3 w-3" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-black/25 px-2 py-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="max-w-3xl pt-12 sm:pt-16">
              <h1 className="text-4xl font-black leading-[1.2] text-white sm:text-5xl lg:text-[62px]">
                {post.title}
              </h1>

              <div className="mt-5 flex items-center justify-start gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-12 w-12 rounded-full border-2 border-white/20 object-cover shadow-lg shadow-black/30"
                />
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">{post.author.name}</div>
                  <div className="text-xs text-white/70">{post.author.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-[#2a2a2a] bg-[#121212]/90 px-4 py-6 sm:px-6">
        <div className="space-y-8">
          {blocks.map((block, index) => {
            const title = block.startsWith("## ") ? block.replace("## ", "") : null;
            const id = title
              ? title
                  .toLowerCase()
                  .replace(/[^\u0621-\u064A\w\s-]/g, "")
                  .replace(/\s+/g, "-")
              : `block-${index}`;

            if (title) {
              return (
                <section key={id} id={id} className="scroll-mt-24">
                  <h2 className="flex items-center gap-3 text-[30px] font-black leading-tight text-white">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-xs font-bold text-orange-300">
                      {index + 1}
                    </span>
                    <span>{title}</span>
                  </h2>
                </section>
              );
            }

            return (
              <p key={`para-${index}`} className="text-lg leading-9 text-neutral-300">
                {block}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
