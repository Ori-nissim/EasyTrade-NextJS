"use client";
import { BookOpen, Home, LucideIcon, Newspaper, PieChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavRoutes() {
  const pathname = usePathname();

  // returns if the current path is active
  const isActive = (path: string) => pathname === path;

  function NavLink(props: {
    path: string;
    text: string;
    icon: React.ReactElement<LucideIcon>;
  }) {
    return (
      <li>
        <Link
          className={`flex space-x-1 items-center text-md hover:text-textHover py-3 border-textNavSelected ${
            isActive(props.path)
              ? "text-textNavSelected border-b-2"
              : "text-textNav"
          } `}
          href={props.path}
        >
          {props.icon}
          <span>{props.text}</span>
        </Link>
      </li>
    );
  }

  return (
    <div>
      <ul className="space-x-6 hidden lg:flex lg:m-auto ">
        <NavLink path="/" text="Home" icon={<Home />} />
        <NavLink path="/news" text="News" icon={<Newspaper />} />
        <NavLink
          path="/tradingJournal"
          text="Trading Journal"
          icon={<BookOpen />}
        />
        <NavLink path="/portfolio" text="Portfolio" icon={<PieChart />} />
      </ul>
    </div>
  );
}
