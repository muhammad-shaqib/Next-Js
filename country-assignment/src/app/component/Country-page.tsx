import Link from "next/link";
import Image from "next/image";
import { Prop } from "../../../type/Type";

export default function CountryName(prop:Prop) {
  return (
    <div className="countrypage">
      <br />
      <ul className="cName">
        <li >
          <Link href={prop.href} id="li">
            <div className="country-item">
            <Image src={prop.src} alt={prop.alt} width={100} height={50} />
            </div>
            <h3>{prop.countryName }</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}
