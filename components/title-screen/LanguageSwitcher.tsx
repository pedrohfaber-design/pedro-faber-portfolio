
"use client";

import {
  useLanguage,
  type Language,
} from "@/i18n/LanguageContext";

const languages: {
  value: Language;
  label: string;
}[] = [
  { value: "pt", label: "🇧🇷 PT" },
  { value: "en", label: "🇺🇸 EN" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute right-5 top-5 z-30 flex items-center gap-1 border border-cyan-400/30 bg-[#08111f]/90 p-1 font-mono text-[11px] sm:right-8 sm:top-8">
      {languages.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => setLanguage(item.value)}
          aria-pressed={language === item.value}
          className={`px-3 py-2 transition ${
            language === item.value
              ? "bg-cyan-400 text-black"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
