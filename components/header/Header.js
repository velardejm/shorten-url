import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import NavButton from "./NavButton";

function Header({ navToggle, isNavOpen }) {
  return (
    <div className="flex justify-between p-7 flex-center md:mx-16">
      <Link href="#">
        <img src="/images/logo.svg" />
      </Link>

      <NavButton navToggle={navToggle} />

      <MobileNavigation isNavOpen={isNavOpen} />
      <Navigation />
    </div>
  );
}

export default Header;
