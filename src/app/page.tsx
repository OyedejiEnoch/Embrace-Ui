import About from "@/sections/About";
import Commitments from "@/sections/Commitments";
import Companies from "@/sections/Companies";
import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Team from "@/sections/Team";
import Works from "@/sections/Works";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Commitments />
      <About />
      <Works />
      <Team />
      <Reviews />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
