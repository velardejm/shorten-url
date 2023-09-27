import Link from "next/link";

function Footer({ footerLinks }) {
  return (
    <div className="text-center text-white bg-gray-800 md:flex">
      <Link className="font-bold text-3xl py-6 block" href="#">Shortly</Link>

      {
        footerLinks.map((links, index) => {
          return (
            <div className="mb-10" key={index}>
              <h3 className="font-bold mb-3">{links.header}</h3>
              {
                links.linkDescriptions.map((description, index) => {
                  return <Link className="block mb-2" href="#" key={index}>{description}</Link>
                })
              }
            </div>
          )
        })
      }

      <div>
        <div className="flex justify-center pb-12">
          <img className="pr-5" src="/images/icon-facebook.svg" />
          <img className="pr-5" src="/images/icon-twitter.svg" />
          <img className="pr-5" src="/images/icon-pinterest.svg" />
          <img className="pr-5" src="/images/icon-instagram.svg" />
        </div>
      </div>
    </div>
  );
}

export default Footer;