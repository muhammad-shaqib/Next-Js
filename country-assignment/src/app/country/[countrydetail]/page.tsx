import Link from "next/link";

import { CountryDetails } from "../../../../type/Type";


const CountryName = ({ params }: { params: { countrydetail: string } }) => {
  const countryDetails: CountryDetails[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241 million",
    },
    {
      name: "South_Korea",
      capital: "Seoul",
      population: "51.7 million",
    },
    {
      name: "London",
      capital: "United Kingdom",
      population: "9 million",
    },
    {
      name: "Turkey",
      capital: "Ankara",
      population: "86.6 million",
    },
    {
      name: "Paris",
      capital: "France",
      population: "2.2 million",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.countrydetail.toLowerCase()
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl"> Country Not Found! </h1>
    );
  }

  
  return (
    <div className="text-center m-10 bg-gray-500 rounded-lg">
      <div className="text-white text-center text-xl p-4">
        <h1 className="m-4"> Name: {country.name}</h1>
        <h1 className="m-4"> Population: {country.population}</h1>
        <h1 className="m-4"> Capital: {country.capital}</h1>
        <Link href="/country" className="m-2 p-3 bg-pink-600 rounded-md text-base">Back to Country List</Link>
      </div>
    </div>
  );
};

export default CountryName;
