import Link from "next/link";

export default function Navigation({ isNavOpen }) {
  function navBodyClickHandler(e) {
    e.stopPropagation();
  }

  const linkDescriptions = ["Features", "Pricing", "Resources"];

  return (
    <div
      className={`absolute block w-full ${!isNavOpen ? "hidden" : ""}`}
      onClick={navBodyClickHandler}
    >
      <div className="flex flex-col items-center font-bold text-white bg-indigo-950 px-8 py-10 rounded-lg mx-5 mb-5">
        {linkDescriptions.map((desc, index) => {
          return (
            <Link className="mb-7" href="#" key={index}>
              {desc}
            </Link>
          );
        })}

        <Link className="py-7 w-full text-center border-t" href="#">
          Login
        </Link>
        <Link className="btn w-full text-center" href="#">
          Sign Up
        </Link>
        
      </div>
    </div>
  );
}
