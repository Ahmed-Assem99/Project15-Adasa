import { NavLink } from "react-router-dom";
import { FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { Aperture, Mail, ArrowLeft } from "lucide-react";

const exploreLinks = [
  { to: "", label: "الرئيسية", end: true },
  { to: "blog", label: "المدونة" },
  { to: "aboutus", label: "من نحن" },
];

const categoryLinks = ["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"];

const socials = [
  { icon: FaYoutube, href: "#", label: "يوتيوب" },
  { icon: FaLinkedinIn, href: "#", label: "لينكدإن" },
  { icon: FaGithub, href: "#", label: "جيت هب" },
  { icon: FaXTwitter, href: "#", label: "إكس" },
];

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#050505] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div dir="ltr" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div dir="rtl" className="flex min-h-[300px] flex-col justify-between rounded-[26px] border border-[#2a2a2a] bg-[#111111]/90 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="text-right text-[15px] font-bold text-white">ابق علي اطلاع</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
                  <Mail className="h-4 w-4" />
                </span>
              </div>

              <p className="text-right text-sm leading-7 text-neutral-400">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:brightness-110"
              >
                اشترك
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-neutral-600"
              >
                أرسل بريدك الإلكتروني
              </button>
            </div>
          </div>

          <div dir="rtl" className="flex min-h-[300px] flex-col rounded-[26px] border border-[#2a2a2a] bg-[#111111]/90 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-[15px] font-bold text-white">التصنيفات</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
                <span className="text-lg leading-none">•</span>
              </span>
            </div>

            <ul className="mt-2 space-y-3 text-right text-sm text-neutral-400">
              {categoryLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="transition hover:text-orange-400">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div dir="rtl" className="flex min-h-[300px] flex-col rounded-[26px] border border-[#2a2a2a] bg-[#111111]/90 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-[15px] font-bold text-white">استكشف</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
                <span className="text-lg leading-none">•</span>
              </span>
            </div>

            <ul className="mt-2 space-y-3 text-right text-sm text-neutral-400">
              {exploreLinks.map(({ to, label, end }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    end={end}
                    className="transition hover:text-orange-400"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div dir="rtl" className="flex min-h-[300px] flex-col rounded-[26px] border border-[#2a2a2a] bg-[#111111]/90 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="text-[15px] font-bold text-white">عدسة</span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg shadow-orange-500/20">
                ٤
              </span>
            </div>

            <p className="text-right text-sm leading-7 text-neutral-400">
              مدونة متخصصة في التصوير الفوتوغرافي، نشارك بيننا نصائح
              عملية وتحليلات من الخبراء لتطوير مهاراتك في الإضاءة
              والتكوين والمشهد.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-neutral-300 transition hover:border-orange-500 hover:text-orange-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}