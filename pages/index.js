import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ShortenLink from "@/components/ShortenLink";
import Features from "@/components/features/Features";
import BoostLink from "@/components/BoostLink";
import Footer from "@/components/footer/Footer";

export default function Home({ features, footerLinks }) {
  return (
    <div>
      <Header />
      <Banner />
      <div className="bg-gray-100 px-7">
        <ShortenLink />
        <Features features={features} />
      </div>
      <BoostLink />
      <Footer footerLinks={footerLinks}/>
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
      footerLinks: objectData.footerLinks
    },
  };
}
