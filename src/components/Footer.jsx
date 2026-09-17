import { NavLink } from "react-router-dom";
import { FaYoutube, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { Aperture } from "lucide-react";

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
    <footer dir="rtl" className="bg-neutral-950 px-6 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div className="order-1 lg:order-4">
          <div className="flex items-center justify-end gap-2">
            <span className="text-lg font-bold text-white">عدسة</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              <Aperture className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم.
          </p>
          <div className="mt-5 flex justify-end gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* explore */}
        <div className="order-2 lg:order-3">
          <h3 className="flex items-center gap-3 text-sm font-bold text-white">
            استكشف
            <span className="h-px flex-1 bg-neutral-700" />
          </h3>
          <ul className="mt-5 space-y-3">
            {exploreLinks.map(({ to, label, end }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={end}
                  className="text-sm text-neutral-400 transition-colors hover:text-orange-500"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* categories */}
        <div className="order-3 lg:order-2">
          <h3 className="flex items-center gap-3 text-sm font-bold text-white">
            التصنيفات
            <span className="h-px flex-1 bg-neutral-700" />
          </h3>
          <ul className="mt-5 space-y-3">
            {categoryLinks.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="text-sm text-neutral-400 transition-colors hover:text-orange-500"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* newsletter */}
        <div className="order-4 lg:order-1">
          <h3 className="flex items-center gap-3 text-sm font-bold text-white">
            ابق على اطلاع
            <span className="h-px flex-1 bg-neutral-700" />
          </h3>
          <p className="mt-5 text-sm text-neutral-400">
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>
          <form className="mt-4 space-y-3">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01]"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>

      {/* bottom bar */}
      <div className="mx-auto mt-14 flex max-w-6xl flex-col-reverse items-center gap-4 border-t border-neutral-800 py-6 text-sm text-neutral-500 sm:flex-row sm:justify-between">
        <p>© 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500">
            سياسة الخصوصية
          </a>
          <a href="#" className="hover:text-orange-500">
            شروط الخدمة
          </a>
        </div>
      </div>
    </footer>
  );
}