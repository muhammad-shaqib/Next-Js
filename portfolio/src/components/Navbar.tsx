import Link from "next/link";
import Image from "next/image";
import "../Style/Style.css"


export default function NavBar() {
    return (
        <nav className="nav">
            <div className="logo">
                <Image src="/IMAGE.png" alt="Logo" width={85} height={60}/>
                <span> <b>Muhammad Shaqib </b> </span>
            </div>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Skill">Skill</Link></li>
                <li><Link href="/Project">Project</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
