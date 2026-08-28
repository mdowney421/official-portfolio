import NavigationBar from "@/components/navigation";
import { BackgroundFx } from "@/components/background-fx";
import { ScrollProgress } from "@/components/scroll-progress";
import Hero from "@/components/hero";
import LogosMarquee from "@/components/logos-marquee";
import Services from "@/components/services";
import Process from "@/components/process";
import Work from "@/components/work";
import Stats from "@/components/stats";
import About from "@/components/about";
import CtaBanner from "@/components/cta-banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <BackgroundFx />
      <NavigationBar />
      <main>
        <Hero />
        <LogosMarquee />
        <Services />
        <Process />
        <Work />
        <Stats />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
