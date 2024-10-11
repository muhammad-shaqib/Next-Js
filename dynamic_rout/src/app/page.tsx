import Link from "next/link";
export default function Home() {
  return (
    <div className="centered">
      <h1 >WELCOME TO COUNTRY PAGE</h1>
      <br />
      <h3 >To Explore More About Countries  Click On Next</h3>
      <br />
      <button > <Link href="/country">Next</Link>  </button>
      </div>
  );
};