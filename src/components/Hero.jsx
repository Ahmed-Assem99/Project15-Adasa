import { NavLink } from "react-router-dom";
import { PenLine, Folder, Users, Newspaper, Info, ArrowLeft } from "lucide-react";

const stats = [
  { icon: PenLine, value: "6", label: "كاتب" },
  { icon: Folder, value: "4", label: "تصنيفات" },
  { icon: Users, value: "+10ألف", label: "قارئ" },
  { icon: Newspaper, value: "+50", label: "مقالة" },
];

export default function Hero() {
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* badge */}
        <div dir="ltr" className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-5 py-2 text-sm font-semibold text-orange-500">
          <span>مرحباً بك في عدسة</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500/50" />
          </span>
        </div>

        {/* heading */}
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          اكتشف <span className="text-orange-500">فن</span>
          <br />
          التصوير الفوتوغرافي
        </h1>

        {/* description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        {/* actions — dir locked to ltr so button order never flips based on page-level dir */}
        <div dir="ltr" className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NavLink
            to="aboutus"
            dir="rtl"
            className="flex items-center gap-2 rounded-full border border-neutral-700 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-neutral-500"
          >
            اعرف المزيد
            <Info className="h-4 w-4" />
          </NavLink>
          <NavLink
            to="blog"
            dir="rtl"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-transform hover:scale-[1.02]"
          >
            <ArrowLeft className="h-4 w-4" />
            استكشف المقالات
          </NavLink>
        </div>

        {/* stats — dir locked to ltr so card order never flips based on page-level dir */}
        <div dir="ltr" className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              dir="rtl"
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