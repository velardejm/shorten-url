import Link from "next/link";

function BoostLink() {
  return (
    <div className="bg-indigo-950 bg-[url('/images/bg-boost-mobile.svg')] bg-no-repeat bg-cover text-center py-20">
      <h2 className="text-3xl text-white font-bold mb-5">Boost your links today</h2>
      <Link className="btn-2 p-5" href="#">Get Started</Link>
    </div>
  );
}

export default BoostLink;