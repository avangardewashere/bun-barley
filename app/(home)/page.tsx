import Image from "next/image";
import Hero from "@/components/Home/Hero";
import EntryParagraph from "@/components/Home/EntryParagraph";
import GoodNews from "@/components/Home/GoodNews";
import Lifetime from "@/components/Home/Lifetime";
import Disclaimer from "@/components/Home/Disclaimer";
export default function Home() {
  return (  
    <>
      <Hero />
      <EntryParagraph />
      <GoodNews />
      <Lifetime />
      <Disclaimer />
    </>
  );
}
