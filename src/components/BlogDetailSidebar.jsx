import { Menu } from "lucide-react";

export default function BlogDetailSidebar({ items = [] }) {
  return (
    <div className="rounded-[22px] border border-[#2a2a2a] bg-[#121212]/90 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-[#2d2d2d] bg-[#1a1a1a]/80 px-3 py-3">
        <span className="flex items-center gap-2 text-sm font-bold text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <Menu className="h-4 w-4" />
          </span>
          محتويات المقال
        </span>
      </div>

      <div className="space-y-2">
        {items.length > 0 ? (
          items.map((item, index) => (
            <a
              key={item.id || `${item.title}-${index}`}
              href={`#${item.id}`}
              className={`group flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-right text-sm transition-all ${
                index === 0
                  ? "border-orange-500/40 bg-orange-500/10 text-orange-300 shadow-[0_0_0_1px_rgba(249,115,22,0.15)]"
                  : "border-[#2a2a2a] bg-[#1b1b1b]/80 text-neutral-300 hover:border-neutral-600 hover:text-white"
              }`}
            >
              <span className="text-[11px] font-semibold text-neutral-400">
                {String(index + 1)}
              </span>
              <span className="line-clamp-1 flex-1 text-right text-[13px] font-medium leading-6">
                {item.title}
              </span>
            </a>
          ))
        ) : (
          <div className="rounded-xl border border-[#2a2a2a] bg-[#1b1b1b]/80 px-3 py-3 text-sm text-neutral-400">
            لا توجد أقسام إضافية
          </div>
        )}
      </div>
    </div>
  );
}
