import {ExperiencePage} from "@/components/ExperiencePage";
import HomePage from "@/components/HomePage";
import {MySkills} from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import ProfilePage from "@/components/ProjectPage";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import {BlogsPage} from "@/components/BlogsPage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <TracingBeam className="my-28">
        <section id="home">
          <HomePage />
        </section>

        <section id="skills">
          <MySkills />
        </section>

        <section id="projects">
          <ProfilePage />
        </section>

        <section id="experience">
          <ExperiencePage />
        </section>

        <section id="blogs">
          <BlogsPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </TracingBeam>
      <Footer />
    </>
  );
}
