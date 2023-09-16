import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between">
      <Link href="#"><img src="/images/logo.svg" /></Link>
      <button>Menu</button>
    </div>
  );
}


export default Header;