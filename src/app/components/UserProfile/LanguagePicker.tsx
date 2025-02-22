"use client";
import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LanguagePicker() {
  const router = useRouter();
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const storedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    if (storedLocale) setLocale(storedLocale);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;
    router.refresh();
  };

  return (
    <div className="userProfileListItem gap-x-2">
      <Languages className="text-textNav" />
      <p className="text-textNav">{locale == "en" ? "Language" : "שפה"}</p>
      <select
        className="border-2 border-textNav text-textNav bg-cardHover p-2 rounded-md rtl:mr-auto ltr:ml-auto"
        value={locale}
        onChange={handleChange}
      >
        <option value="en">English 🇺🇸 </option>
        <option value="he">עברית 🇮🇱</option>
      </select>
    </div>
  );
}
