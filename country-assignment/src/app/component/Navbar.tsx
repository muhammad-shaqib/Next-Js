import Link from "next/link"
export default function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/" id="liself1">Home</Link>
            <Link href="/country" id="liself2">Country List</Link>
        </nav>
    )
}
