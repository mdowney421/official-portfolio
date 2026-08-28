import dynamic from "next/dynamic";
import NavigationBar from "@/components/navigation";
import { BackgroundFx } from "@/components/background-fx";
import { ScrollProgress } from "@/components/scroll-progress";
import Hero from "@/components/hero";

const LogosMarquee = dynamic(() => import("@/components/logos-marquee"));
const Services = dynamic(() => import("@/components/services"));
const Process = dynamic(() => import("@/components/process"));
const Work = dynamic(() => import("@/components/work"));
const Stats = dynamic(() => import("@/components/stats"));
const About = dynamic(() => import("@/components/about"));
const CtaBanner = dynamic(() => import("@/components/cta-banner"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

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
