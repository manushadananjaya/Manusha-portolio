import {ExperiencePage} from "@/components/ExperiencePage";
import HomePage from "@/components/HomePage";
import {MySkills} from "@/components/MySkills";
import Navbar from "@/components/Navbar";
import ProfilePage from "@/components/ProjectPage";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import {BlogsPage} from "@/components/BlogsPage";


export default function Home() {
  return (
    <>
      <Navbar />
      <TracingBeam className="my-28">
        <HomePage />
        <MySkills />
        <ProfilePage />
        <ExperiencePage />
        <BlogsPage />
      </TracingBeam>
    </>
  );
}
