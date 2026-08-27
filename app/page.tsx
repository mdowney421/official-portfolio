import NavigationBar from "@/components/navigation";
import Welcome from "@/components/welcome";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <Welcome />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
