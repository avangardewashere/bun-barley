"use client"
import { navLinks } from "@/data/const";
import styles from "./index.module.scss"
import clsx from "clsx"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
const NavLinks = () => {
    const pathname = usePathname();

    return (
        <nav className={clsx(styles.navlinks)}>
            {navLinks.map((link) => (
                <Link className={clsx(styles.link, {
                    [styles.active]: pathname === link.href, 
                })} key={link.label} href={link.href}>{link.label}</Link>
            ))}
        </nav>
    )
}

export default NavLinks;