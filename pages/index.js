import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ShortenLink from "@/components/ShortenLink";
import Features from "@/components/features/Features";
import BoostLink from "@/components/BoostLink";
import Footer from "@/components/Footer";

export default function Home({ features }) {
  return (
    <div>
      <Header />
      <Banner />
      <div className="bg-gray-100 px-5">
        <ShortenLink />
        <Features features={features} />
      </div>
      <BoostLink />
      <Footer />
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
    },
  };
}
