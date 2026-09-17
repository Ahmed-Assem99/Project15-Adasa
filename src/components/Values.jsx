import { RefreshCw, Handshake, Zap, Target } from "lucide-react";

const values = [
  {
    icon: RefreshCw,
    title: "دائماً محدث",
    description: "أحدث الاتجاهات وأفضل الممارسات",
  },
  {
    icon: Handshake,
    title: "المجتمع",
    description: "تعلم مع آلاف المصورين",
  },
  {
    icon: Zap,
    title: "تركيز عملي",
    description: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: Target,
    title: "الجودة أولاً",
    description: "محتوى مدروس ومكتوب بخبرة",
  },
];

export default function Values() {
  return (
    <section dir="rtl" className="bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* heading */}
        <h2 className="flex items-center justify-center gap-3 text-3xl font-bold text-white">
          <span className="h-7 w-1 rounded-full bg-orange-500" />
          قيمنا
          <span className="h-7 w-1 rounded-full bg-orange-500" />
        </h2>
        <p className="mt-4 text-neutral-400">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 px-6 py-10"
            >
              <Icon className="mx-auto mb-5 h-8 w-8 text-orange-500" strokeWidth={2} />
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}