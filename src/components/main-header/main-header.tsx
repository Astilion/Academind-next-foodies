
import Link from "next/link"
import logoImg from '@/src/assets/logo.png'
import Image from "next/image"
import classes from './main-header.module.css'
import HeaderBackground from "./header-background"
import NavLink from "./nav-link"

export default function MainHeader() {
    return (
        <>
            <HeaderBackground />
            <header className={classes.header}> <Link className={classes.logo} href="/">
                <Image className="w-20 h-20 object-contain drop-shadow-lg" src={logoImg} priority alt="A plate with food on it" /> NextLevel Food</Link>

                <nav className={classes.nav}><ul className="m-0 p-0 flex gap-6 text-xl">
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                        {/* <Link className={path === '/community' ? classes.active : undefined} href="/community">Foodies Community</Link>  */}
                        {/*  === nothing nested / startsWith with nested pages */}
                    </li>
                </ul>
                </nav>
            </header></>)
}