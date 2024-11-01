import CountryName from "../component/Country-page";

export default function CountryData() {
  return (
    <div className="countrypage">
      <h1>To see The Country Details Click On Each Flag</h1>
      <ul className="cName1">
        <li>
       <CountryName href="/country/pakistan" src="/Pakistani.jpg" alt="Pakistan" countryName="Pakistan" />
        </li>
        <li>
          <CountryName href="/country/South_Korea" src="/South Korea.jpg" alt="South Korea" countryName="South Korea" />
        </li>
      </ul>

      <ul className="cName2">
        <li>
          <CountryName href="/country/Turkey" src="/Türkiye.jpg" alt="Turkey" countryName="Turkey" />
        </li>
        <li>
          <CountryName href="/country/London" src="/london.jpg" alt="London" countryName="London" />
          </li>
      </ul>

      <ul className="cName3">
        <li>
          <CountryName href="/country/Paris" src="/France.jpg" alt="Paris" countryName="Paris" />
        </li>
      </ul>
    </div>
  );
}