"use client";
import { BookOpen, Home, Newspaper, PieChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function NavRoutes() {
  const pathname = usePathname();
  const t = useTranslations("header");

  // Checks if the given path is active
  const isActive = (path: string) => pathname === path;

  function NavLink(props: {
    path: string;
    text: string;
    icon: React.ReactElement;
  }) {
    return (
      <li>
        <Link
          className={`flex items-center gap-x-1 rtl:gap-x-reverse text-md hover:text-textHover py-3 border-textNavSelected ${
            isActive(props.path)
              ? "text-textNavSelected border-b-2"
              : "text-textNav"
          }`}
          href={props.path}
        >
          {props.icon}
          <span>
            <strong>{props.text}</strong>
          </span>
        </Link>
      </li>
    );
  }

  return (
    <div>
      <ul className="flex lg:m-auto gap-x-6 rtl:gap-x-reverse lg:flex-row flex-col">
        <NavLink path="/" text={t("home")} icon={<Home />} />
        <NavLink path="/news" text={t("news")} icon={<Newspaper />} />
        <NavLink
          path="/tradingJournal"
          text={t("tradingJournal")}
          icon={<BookOpen />}
        />
        <NavLink path="/portfolio" text={t("portfolio")} icon={<PieChart />} />
      </ul>
    </div>
  );
}
