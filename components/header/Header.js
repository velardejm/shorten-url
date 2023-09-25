import Link from "next/link";
import Navigation from "./Navigation";

function Header({ navToggle, isNavOpen }) {
  return (
    <div>
      <div className="flex justify-between p-7 flex-center">
        <Link href="#">
          <img src="/images/logo.svg" />
        </Link>

        <button
          onClick={navToggle}
          className="space-y-2 inline-block hover:cursor-pointer"
        >
          <div className="w-8 h-1 bg-gray-600"></div>
          <div className="w-8 h-1 bg-gray-600"></div>
          <div className="w-8 h-1 bg-gray-600"></div>
        </button>
      </div>

      <Navigation isNavOpen={isNavOpen} />
    </div>
  );
}

export default Header;
