import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
