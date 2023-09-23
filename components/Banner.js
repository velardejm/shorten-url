import Link from "next/link";

function Banner() {
  return (
    <div>
      <img
        className="max-w-none w-[135%] pl-5"
        src="/images/illustration-working.svg"
      />

      <div className="px-7 text-center font-bold pb-36">
        <h1 className="text-4xl mt-7">More than just shorter links</h1>
        <p className="text-lg my-6">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link className="btn block w-48 mx-auto text-xl p-4" href="#">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Banner;
