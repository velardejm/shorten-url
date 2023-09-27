import Link from "next/link";

export default function Navigation() {
  const linkDescriptions = ["Features", "Pricing", "Resources"];

  return (
    <div className="hidden md:flex justify-between items-center grow mx-10">
      <div className="">
        {linkDescriptions.map((desc, index) => {
          return <Link href="#" className="ml-5" key={index}>{desc}</Link>;
        })}
      </div>

      <div className="">
        <Link href="#">Login</Link>
        <Link href="#" className="btn px-4 ml-5">Sign Up</Link>
      </div>
    </div>
  );
}
