import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

function HomePage() {
  return (
    <div className="relative min-h-screen flex-col items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            HI, I&apos;M <span className="block">MANUSHA</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I am a full-stack developer and a tech enthusiast. I have a passion
            for building web applications and solving problems. I am always
            looking for opportunities to learn and grow. Contact me if you have
            a project in mind or just want to say hi.
          </p>
        </div>

        <div className="relative w-full md:w-1/2">
          <Image
            src="/IMG_5020.jpg"
            alt="Manusha Dananjaya"
            width={500}
            height={500}
            className="relative object-cover z-10"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 85%, 0% 85%)",
            }}
          />
        </div>
      </section>
      <div className="flex justify-center mb-24">
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-8 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          <a
            href="/Manusha-Dananjaya_SE.pdf"
            download="Manusha-Dananjaya_SE.pdf"
          >
            Download My Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
