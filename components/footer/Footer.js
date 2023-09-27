import Link from "next/link";

function Footer({ footerLinks }) {
  return (
    <div className="text-center text-white bg-gray-800 md:flex justify-between px-16 pt-10">
      <div className="grow-[2]">
        <Link className="font-bold text-3xl mb-6 inline-block" href="#">Shortly</Link>
      </div>

      {
        footerLinks.map((links, index) => {
          return (
            <div className="mb-10 grow-[1]" key={index}>
              <h3 className="font-bold mb-3">{links.header}</h3>
              {
                links.linkDescriptions.map((description, index) => {
                  return <Link className="block mb-2 w-max mx-auto" href="#" key={index}>{description}</Link>
                })
              }
            </div>
          )
        })
      }

      <div>
        <div className="flex justify-center pb-12">
          <Link className="mr-5" href="#"><img src="/images/icon-facebook.svg" /></Link>
          <Link className="mr-5" href="#"><img src="/images/icon-twitter.svg" /></Link>
          <Link className="mr-5" href="#"><img src="/images/icon-pinterest.svg" /></Link>
          <Link className="mr-5" href="#"><img src="/images/icon-instagram.svg" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;