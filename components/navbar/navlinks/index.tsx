"use client"
import { navLinks } from "@/data/const";
import styles from "./index.module.scss"
import clsx from "clsx"
import Link from "next/link";
import { useState } from "react";
const NavLinks = () => {
    const [active, setActive] = useState(false);
    return (
        <nav className={clsx(styles.navlinks)}>
            {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>{link.label}</Link>
            ))}
        </nav>
    )
}

export default NavLinks;