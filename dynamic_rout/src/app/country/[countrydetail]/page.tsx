import { notFound } from 'next/navigation'; // Use for handling 404

type CountryDetailProps = {
  params: {
    countrydetail: string;
  };
};

export async function generateStaticParams() {
  return [
    { countrydetail: 'pakistan' },
      { countrydetail: 'india' },
      { countrydetail: 'china' },
      { countrydetail: 'japan' },
    // Add more countries if needed
  ];
}

// Fetch country data in the server component
async function getCountryData(countryName: string) {
  const countryData = {
    pakistan: { name: 'Pakistan', population: '216565317', capital: 'Islamabad' },
      india: { name: 'India', population: '1380004385', capital: 'New Delhi' },
      china: { name: 'China', population: '1439323776', capital: 'Beijing' },
      japan: { name: 'Japan', population: '127817277', capital: 'Tokyo' },
    // Add more country data here
  };

  return countryData[countryName.toLowerCase()] || null;
}

export default async function CountryDetail({ params }: CountryDetailProps) {
  const country = await getCountryData(params.countrydetail);

  // If no country is found, trigger the 404 page
  if (!country) {
    notFound();
  }

  return (
    <div>
      <h1>COUNTRY DETAILS</h1>
      <h3>Name: {country.name}</h3>
      <h3>Population: {country.population}</h3>
      <h3>Capital: {country.capital}</h3>
    </div>
  );
}
