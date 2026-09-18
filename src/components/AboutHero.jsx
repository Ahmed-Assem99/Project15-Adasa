import { BookOpen, PenLine, Newspaper, Users } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "+15", label: "تصنيف" },
  { icon: PenLine, value: "+50", label: "كاتب خبير" },
  { icon: Newspaper, value: "+500", label: "مقالة منشورة" },
  { icon: Users, value: "+2مليون", label: "قارئ شهرياً" },
];

export default function AboutHero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24"
    >
      {/* grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* badge */}
        <div dir="ltr" className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-5 py-2 text-sm font-semibold text-orange-500">
          <span>من نحن</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500/50" />
          </span>
        </div>

        {/* heading */}
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          <span className="text-orange-500">مهمتنا</span> هي الإعلام
          والإلهام
        </h1>

        {/* description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          مدونة متخصصة في فن التصويغرافي، نشارك معكم أسرار المحترفين ونصائح
          عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين
          على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        {/* stats */}
        <div dir="ltr" className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 px-4 py-8"
            >
              <Icon className="mx-auto mb-4 h-6 w-6 text-orange-500" />
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="mt-1 text-sm text-neutral-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}