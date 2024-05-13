import Link from "next/link"
import logoImg from '@/src/assets/logo.png'
import Image from "next/image"
import styles from './main-header.module.css'
import HeaderBackground from "./header-background"
export default function MainHeader() {
    return (
        <>
            <HeaderBackground />
            <header className="flex justify-between items-center py-8 px-4 md:px-[10%]"> <Link className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-mont tracking-widest text-2xl uppercase" href="/">
                <Image className="w-20 h-20 object-contain drop-shadow-lg" src={logoImg} priority alt="A plate with food on it" /> NextLevel Food</Link>

                <nav className={styles.nav}><ul className="m-0 p-0 flex gap-6 text-xl">
                    <li><Link className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg" href="/meals">Browse Meals</Link></li>
                    <li><Link className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg" href="/community">Foodies Community</Link></li>
                </ul></nav>
            </header></>)
}