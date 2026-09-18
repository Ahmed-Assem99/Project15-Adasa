import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Grid3X3, List, Search } from "lucide-react";
import postsData from "../posts.json";
import BlogCard from "../components/BlogCard";

const pageSize = 6;

export default function Blog() {
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("الكل");
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["الكل", ...new Set(postsData.posts.map((post) => post.category))];

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim();

    return postsData.posts.filter((post) => {
      const matchesCategory = category === "الكل" ? true : post.category === category;
      const haystack = `${post.title} ${post.excerpt} ${post.content} ${post.author.name}`.toLowerCase();
      const matchesSearch = !normalizedQuery || haystack.includes(normalizedQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const start = (currentPage - 1) * pageSize;
  const visiblePosts = filteredPosts.slice(start, start + pageSize);

  const visiblePageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#050505] px-4 pb-14 pt-28 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[28px] border border-[#1f1f1f] bg-[radial-gradient(circle_at_top,_rgba(255,130,50,0.14),_transparent_38%),linear-gradient(180deg,#070707_0%,#0d0d0d_100%)] px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-400/10 px-4 py-1.5 text-[11px] font-semibold text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              مدونة عدسة
            </span>

            <h1 className="mt-6 text-4xl font-black text-orange-400 sm:text-5xl lg:text-[72px] lg:leading-[1.05]">
              اكتشف مقالاتنا
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-base">
              اكتشف المقالات المميزة في التصوير، الإضاءة، البورتريه، والمناظر الطبيعية مع نصائح عملية من الخبراء.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[24px] border border-[#1f1f1f] bg-[#0b0b0b]/90 p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((item) => {
                const isActive = item === category;
                return (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "border-neutral-700 bg-neutral-900/60 text-neutral-300 hover:border-neutral-500 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-950/80 px-4 py-2 text-neutral-400 focus-within:border-orange-500">
                <Search className="h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="ابحث في المقالات..."
                  className="w-52 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="mt-8 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-[#111111] p-1">
            <button
              type="button"
              onClick={() => setView("grid")}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
                view === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
              }`}
              aria-label="عرض شبكي"
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
                view === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"
              }`}
              aria-label="عرض قائمة"
            >
              <List className="h-5 w-5" />
            </button>
          </div>

          <p className="text-sm text-neutral-300">
            عرض <span className="font-bold text-orange-400">{filteredPosts.length}</span> مقال
          </p>
        </section>

        {visiblePosts.length > 0 ? (
          <>
            <section className={view === "grid" ? "mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3" : "mt-8 space-y-6"}>
              {visiblePosts.map((post) => (
                <BlogCard key={post.id} post={post} compact={view === "grid"} />
              ))}
            </section>

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-200 transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="الصفحة السابقة"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {visiblePageNumbers.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => changePage(pageNumber)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
                      pageNumber === currentPage
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                        : "border border-neutral-700 bg-neutral-900 text-neutral-300 hover:border-orange-500 hover:text-orange-400"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-200 transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="الصفحة التالية"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-10 rounded-[24px] border border-dashed border-neutral-700 bg-neutral-900/50 px-6 py-16 text-center">
            <p className="text-xl font-semibold text-white">لا توجد مقالات تطابق بحثك.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("الكل");
              }}
              className="mt-4 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-400"
            >
              إعادة تعيين المرشحات
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
