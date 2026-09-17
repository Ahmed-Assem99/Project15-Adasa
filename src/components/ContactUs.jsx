import { Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section
      dir="rtl"
      className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className="mt-4 leading-relaxed text-white/90">
          نحب أن نسمع منك، سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
          أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-full border border-white/60 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            تصفح المقالات
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-neutral-900"
          >
            تواصل معنا
            <Mail className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}