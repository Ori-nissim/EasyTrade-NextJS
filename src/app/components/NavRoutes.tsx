"use client"
import Link from "next/link";

export default function NavRoutes() {
    return (
        <div>
            <ul className="space-x-4 hidden lg:flex lg:m-auto">
                <NavRoutesItem path="/" text="Home" />
                <NavRoutesItem path="/tradingJournal" text="Trading Journal" />
                <NavRoutesItem path="/portfolio" text="Portfolio" />
            </ul>
        </div>

    );
}
export function NavRoutesItem(props: { path: string, text: string }) {
    return (
        <li>
            <Link className="text-lg text-text hover:text-textHover hover:border-b-2 border-complement" href={props.path}>
                {props.text}
            </Link>
        </li>
    );
}