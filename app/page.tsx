import Footer from "@/components/Footer";

import HeroSection from "@/components/HeroSection";
import Skillset from "@/components/skillset";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main className="flex items-center flex-col w-full h-full">
      <section className="w-full" id="about">
        <HeroSection />
      </section>
      <section className="w-full" id="works">
        <Works />
      </section>
      <section className="flex w-full items-center" id="techstack">
        <Skillset />
      </section>
      <section className="w-full  ">
        
      </section>
      <div className="w-full flex">
      <Footer/>
      </div>
    </main>
  );
}
