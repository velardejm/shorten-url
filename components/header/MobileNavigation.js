import Link from "next/link";

export default function MobileNavigation({ isNavOpen }) {
  function navBodyClickHandler(e) {
    e.stopPropagation();
  }

  const linkDescriptions = ["Features", "Pricing", "Resources"];

  return (
    <>
      <div
        className={`absolute w-full ${
          !isNavOpen ? "hidden" : ""
        } top-20 left-0 md:hidden`}
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
          <Link className="btn w-full max-w-[300px] text-center" href="#">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
