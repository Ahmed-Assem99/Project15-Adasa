import { Mail } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=33",
  "https://i.pravatar.cc/64?img=47",
];

export default function Newsletter() {
  return (
    <section dir="rtl" className="bg-black px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-neutral-800 bg-neutral-900/60 px-8 py-14 text-center">
        {/* icon */}
        <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
          <Mail className="h-7 w-7 text-white" />
        </span>

        {/* heading */}
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
        </h2>
        <p className="mt-3 text-neutral-400">
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
          الإلكتروني
        </p>

        {/* form — dir locked to ltr so button/input order never flips based on page-level dir */}
        <div
          dir="ltr"
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <button
            type="button"
            dir="rtl"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02] sm:order-1"
          >
            اشترك الآن
          </button>
          <input
            type="email"
            dir="rtl"
            placeholder="أدخل بريدك الإلكتروني"
            className="flex-1 rounded-full border border-neutral-800 bg-black px-5 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none sm:order-2"
          />
        </div>

        {/* trust row — dir locked to ltr so item order never flips based on page-level dir */}
        <div
          dir="ltr"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-neutral-500"
        >
          <span>إلغاء الاشتراك في أي وقت</span>
          <span className="text-neutral-700">•</span>
          <span>بدون إزعاج</span>
          <span className="text-neutral-700">•</span>
          <span>
            انضم لـ <span className="font-semibold text-white">+10,000</span>{" "}
            مصور
          </span>
          <span className="flex -space-x-2">
            {avatars.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-7 w-7 rounded-full border-2 border-neutral-900 object-cover"
              />
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}