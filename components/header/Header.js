import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Header({ navToggle, isNavOpen }) {
  return (
    <div className="flex justify-between p-7 flex-center md:mx-16">
      <Link href="#">
        <img src="/images/logo.svg" />
      </Link>

      <button
        onClick={navToggle}
        className="space-y-2 inline-block hover:cursor-pointer md:hidden"
      >
        <div className="w-8 h-1 bg-gray-600"></div>
        <div className="w-8 h-1 bg-gray-600"></div>
        <div className="w-8 h-1 bg-gray-600"></div>
      </button>

      <MobileNavigation isNavOpen={isNavOpen} />
      <Navigation />
    </div>
  );
}

export default Header;
