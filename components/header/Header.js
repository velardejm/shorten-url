import Link from "next/link";
import Navigation from "./Navigation";

function Header() {
  return (
    <div>
      <div className="flex justify-between p-7 flex-center">
        <Link href="#"><img src="/images/logo.svg" /></Link>

        <div className="space-y-2 inline-block hover:cursor-pointer">
          <div className="w-8 h-1 bg-gray-600"></div>
          <div className="w-8 h-1 bg-gray-600"></div>
          <div className="w-8 h-1 bg-gray-600"></div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}


export default Header;