import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="w-full max-w-6xl mx-auto py-32 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
         
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hi there! I&apos;m Manusha Dananjaya, a passionate web developer
              with a keen eye for design. I&apos;ve been coding since I was a
              teenager, and I love the challenge of turning ideas into
              beautiful, functional websites.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not writing code, you can find me exploring the
              great outdoors, reading the latest tech blogs, or experimenting
              with new recipes in the kitchen. I&apos;m always eager to learn
              and grow, and I&apos;m excited to share my skills and experiences
              with others.
            </p>
          </div>

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/IMG_5020.jpg" 
              alt="Manusha Dananjaya"
              width={300}
              height={300}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
              style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
