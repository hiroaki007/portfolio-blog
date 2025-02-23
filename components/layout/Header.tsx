import Link from "next/link";


export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">My Portfolio</Link>
                <ul>
                    <li><Link href="/portfolio">PortFolio</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>                
            </nav>
        </header>
    );
}