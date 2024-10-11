import Link from "next/link"

export default function Country() {
    return (
        <div>
            <h1 className="h1">COUNTRY NAME</h1>
            <ul className="list">
                <li>
                    <Link href="/country/Pakistan">Pakistan</Link>
        </li>
                <li>
                    <Link href="country/India">India</Link>
        </li>
                <li>
                    <Link href="/country/China">China</Link>
        </li>
                <li>
                    <Link href="/country/Japan">Japan</Link>
        </li>
      </ul>
    </div>
    )
}