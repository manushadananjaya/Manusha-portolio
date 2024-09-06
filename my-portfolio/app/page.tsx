import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import ProfilePage from "@/components/ProjectPage";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Navbar />
      <TracingBeam className="my-28" >
        <HomePage />
        <ProfilePage />
      </TracingBeam>
    </>
  );
}
