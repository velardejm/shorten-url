import Link from "next/link";

function Banner() {
  return (
    <div>
      <img className="max-w-none w-[135%] pl-5" src="/images/illustration-working.svg"></img>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Link href="#">Get Started</Link>
    </div>
  );
}

export default Banner;
