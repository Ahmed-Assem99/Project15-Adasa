import postsData from "../posts.json";
import AuthorCard from "./AuthorCard";

export default function Authors() {
  // derive a unique author list from the posts (each post embeds its author)
  const uniqueAuthors = Array.from(
    new Map(
      postsData.posts.map((post) => [post.author.name, post.author])
    ).values()
  );

  return (
    <section dir="rtl" className="bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-4 py-1.5 text-xs font-semibold text-orange-500">
            فريقنا
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          </span>
        </div>

        {/* heading */}
        <h2 className="text-3xl font-bold text-white">تعرف على كتابنا</h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-400">
          فريقنا من المصورين والكتاب ذوي الخبرة الذين يشغوفون بمشاركة
          معرفتهم مع المجتمع.
        </p>

        {/* authors grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {uniqueAuthors.map((author) => (
            <AuthorCard key={author.name} author={author} />
          ))}
        </div>
      </div>
    </section>
  );
}