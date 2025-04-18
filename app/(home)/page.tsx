import Image from "next/image";
import Hero from "@/components/Home/Hero";
import EntryParagraph from "@/components/Home/EntryParagraph";
import GoodNews from "@/components/Home/GoodNews";
import Lifetime from "@/components/Home/Lifetime";
import Disclaimer from "@/components/Home/Disclaimer";
import Testimonials from "@/components/Home/Testimonials";
import Review from "@/components/Home/Review";
export default function Home() {
  return (  
    <>
      <Hero />
      <EntryParagraph />
      <Review />
      <GoodNews />
      <Lifetime />
      <Testimonials />
      <Disclaimer />
    
    </>
  );
}
