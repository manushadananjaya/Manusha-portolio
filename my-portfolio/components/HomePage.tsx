import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            voluptas.
          </p>
        </div>

        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-1 -skew-x-12 bg-zinc-800 opacity-80"></div>
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
    </div>
  );
}

export default HomePage;
