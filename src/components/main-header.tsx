import Link from "next/link"
import logoImg from '@/src/assets/logo.png'
export default function MainHeader() {
    return (
        <header className="flex justify-between items-center py-8 px-4 md:px-[10%]"> <Link className="flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-mont tracking-widest text-2xl uppercase" href="/">
            <img className="w-20 h-20 object-contain drop-shadow-lg" src={logoImg.src} alt="A plate with food on it" /> NextLevel Food</Link>

            <nav><ul className="m-0 p-0 flex gap-6 text-xl">
                <li><Link className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r active:bg-gradient-to-r hover:from-orange-500 active:from-orange-500 hover:to-yellow-400 active:to-yellow-400 hover:bg-clip-text active:bg-clip-text hover:text-transparent active:text-transparent hover:text-shadow-lg active:text-shadow-lg" href="/meals">Browse Meals</Link></li>
                <li><Link className="text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r active:bg-gradient-to-r hover:from-orange-500 active:from-orange-500 hover:to-yellow-400 active:to-yellow-400 hover:bg-clip-text active:bg-clip-text hover:text-transparent active:text-transparent hover:text-shadow-lg active:text-shadow-lg" href="/community">Foodies Community</Link></li>
            </ul></nav>
        </header>)
}