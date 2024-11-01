import Link from "next/link";

export default function Header(data:any) {
    return (
        <header className={`${data.font.className} header`}>
            <nav className="nav">
                <ul className="nav_list">
                   <li className="link"> <Link href=""></Link> Works </li>
                   <li className="link"> <Link href=""></Link> Blog </li>
                   <li className="link"> <Link href=""></Link>Contact</li>
                </ul> 
            </nav>
        </header>
        );
}