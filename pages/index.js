import Header from "@/components/header/Header";
import Banner from "@/components/Banner";
import ShortenLink from "@/components/shorten-link/ShortenLink";
import Features from "@/components/features/Features";
import BoostLink from "@/components/BoostLink";
import Footer from "@/components/footer/Footer";

import { useState } from "react";

export default function Home({ features, footerLinks }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function bodyClickHandler() {
    if (isNavOpen) {
      setIsNavOpen(!isNavOpen);
    }
  }

  function navToggle() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div onClick={bodyClickHandler} className="md:px-16">
      <Header navToggle={navToggle} isNavOpen={isNavOpen} />
      <Banner />
      <div className="bg-gray-100 px-7">
        <ShortenLink />
        <Features features={features} />
      </div>
      <BoostLink />
      <Footer footerLinks={footerLinks} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/staticdata");
  const jsonData = await response.json();
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      features: objectData.features,
      footerLinks: objectData.footerLinks,
    },
  };
}
