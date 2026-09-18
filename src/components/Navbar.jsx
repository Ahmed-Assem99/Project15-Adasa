import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import logo from "../assets/logo-GdqARQRt.png";

const links = [
  { to: "", label: "الرئيسية", end: true },
  { to: "blog", label: "المدونة" },
  { to: "aboutus", label: "من نحن" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-800 bg-black/95 backdrop-blur-sm">
      <nav
        dir="rtl"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        {/* logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="عدسة Logo"
            className="h-10 w-10 rounded-xl object-cover ring-1 ring-orange-500/30"
          />
          <div className="text-right">
            <div className="text-lg font-bold text-white">عدسة</div>
            <div className="-mt-1 text-xs text-neutral-500">
              عالم التصويغرافي
            </div>
          </div>
        </div>

        {/* nav links */}
        <div className="flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/60 p-1">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="بحث"
            className="text-neutral-400 hover:text-white"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-600/20 transition-transform hover:scale-[1.02]"
          >
            ابدأ القراءة
          </button>
        </div>
      </nav>
    </header>
  );
}