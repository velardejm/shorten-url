import Link from "next/link";

function Banner() {
  return (
    <div className="mb-36 items-center text-center md:flex md:flex-row-reverse md:px-16 md:text-left">
      <div>
        <img
          className="max-w-none w-[135%] pl-5"
          src="/images/illustration-working.svg"
        />
      </div>

      <div className="px-7 font-bold">
        <h1 className="text-4xl mt-7 md:text-6xl">More than just shorter links</h1>
        <p className="text-lg my-6">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link className="btn-2 p-3 md:ml-0" href="#">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Banner;
