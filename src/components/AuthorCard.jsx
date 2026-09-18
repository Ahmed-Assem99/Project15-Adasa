import { BadgeCheck } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function AuthorCard({ author }) {
  return (
    <div
      dir="rtl"
      className="group flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/40 px-6 py-8 text-center transition-colors duration-300 hover:border-orange-500"
    >
      {/* avatar */}
      <div className="relative">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-20 w-20 rounded-full object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-orange-500"
        />
        <span className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white ring-2 ring-neutral-900">
          <BadgeCheck className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* name & role */}
      <h3 className="mt-4 text-base font-bold text-white">{author.name}</h3>
      <p className="mt-1 text-sm text-orange-500">{author.role}</p>

      {/* socials */}
      <div dir="ltr" className="mt-4 flex items-center gap-2">
        <a
          href="#"
          aria-label="لينكدإن"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-orange-500 hover:text-white"
        >
          <FaLinkedinIn className="h-3.5 w-3.5" />
        </a>
        <a
          href="#"
          aria-label="جيت هب"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-orange-500 hover:text-white"
        >
          <FaGithub className="h-3.5 w-3.5" />
        </a>
        <a
          href="#"
          aria-label="إكس"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-orange-500 hover:text-white"
        >
          <FaXTwitter className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}