'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import classes from './nav-link.module.css'

export default function NavLink({ href, children }: { children: React.ReactNode, href: string }) {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>Browse Meals</Link>
    )
    { children }
}