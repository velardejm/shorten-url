import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ShortenLink from "@/components/ShortenLink";
import Features from "@/components/Features";
import BoostLink from "@/components/BoostLink";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ShortenLink />
      <Features />
      <BoostLink />
      <Footer />
    </div>
  );
}
