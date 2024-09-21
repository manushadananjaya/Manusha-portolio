"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Tab } from "@headlessui/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { Content } from "next/font/google";

function ProfilePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderCards = (projects: any[]) =>
    projects.map((card, index) => (
      <Card key={card.src} card={card} index={index} />
    ));

  const tabs = [
    {
      title: "Web Applications",
      content: <Carousel items={renderCards(webProjects)} />,
    },
    {
      title: "Mobile Applications",
      content: <Carousel items={renderCards(mobileApplications)} />,
    },
    {
      title: "Desktop Applications",
      content: <Carousel items={renderCards(desktopApplications)} />,
    },
    {
      title: "Micro-controller Projects",
      content: <Carousel items={renderCards(microControllerProjects)} />,
    },
  ];

  return (
    <div className="w-full px-4 py-20">
      <h2 className="max-w-7xl mx-auto text-3xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans">
        Get to know about my Projects
      </h2>

      {/* Tabs Container */}
      <div className="flex flex-row pl-24 ml-4 md:space-x-6  md:mr-20 items-center justify-center overflow-auto no-visible-scrollbar space-x-4 max-w-full px-4 mt-9">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setSelectedIndex(idx)}
            className={`relative px-2 py-2 md:px-4 md:py-2 rounded-full transition-colors duration-300 ${
              selectedIndex === idx
                ? "bg-gray-200 dark:bg-blue-700 text-black dark:text-white"
                : "bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white"
            } text-sm md:text-base`}
          >
            {selectedIndex === idx && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.7 }}
                className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full"
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={selectedIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-8 max-w-7xl mx-auto px-4"
      >
        {tabs[selectedIndex].content}
      </motion.div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-4 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              Voom.ai is a platform that helps you do more with AI.
            </span>{" "}
            <br />
            This individual project is a platform powered by GEMINI AI 1.5
            Flash, featuring built-in AI templates that users can utilize or
            customize with their own. It includes Clerk authentication and a
            built-in text editor, allowing users to easily edit AI-generated
            content directly on the platform.
          </p>

          {/* Images */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Image
              src="/projectPhotos/voom.png"
              alt="project-photos"
              height={300}
              width={300}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/voom2.png"
              alt="project-photos"
              height={300}
              width={300}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/voom3.png"
              alt="project-photos"
              height={300}
              width={300}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/voom4.png"
              alt="project-photos"
              height={300}
              width={300}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://voom-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm md:text-base"
            >
              Visit VOOM
            </Link>
            <Link
              href="https://github.com/manushadananjaya/voom"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 text-sm md:text-base"
            >
              View Project on Github
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              Rise up mora 2024 is a platform that helps to collect CVs and
              manage interviews.
            </span>{" "}
            <br />
            This project is done for the Rise up mora 2024 project which is a
            platform that helps to collect CVs and manage interviews. Organized
            by IEEE student branch of University of Moratuwa. This project is
            done by a team of 5 members. I was responsible for company dashboard
            allocations and mark allocation as a full stack developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/rise.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/rise2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/rise3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/rise4.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://riseupmora.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Visit riseupmora.lk
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              CareSync is a medical app that connects doctors and patients.
            </span>{" "}
            <br />
            CareSync is a medical app that connects doctors and patients,
            featuring an admin dashboard for doctor verification via medical
            IDs. It includes step and breath counters, medical report
            management, and more. I contributed to the authentication process,
            including verification screens, OTP password resets, and dashboard
            screens.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/ss2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/ss3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/ss4.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/ss5.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/13L3VeZTxncPxzl58hLwqzvFKv2HsuM5b/view?usp=sharing"
              target="_blank"
              rel="Demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Demo Video
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent4 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              LyricBase is a platform that helps you explore, sing and share
              lyrics.
            </span>{" "}
            <br />
            This individual project is a platform that helps you explore, sing
            and share lyrics. It includes a built-in lyric search, and user
            profile management. Also users can find chords for the lyrics and
            can share their own lyrics with the community.This app has offline
            support and user can download the lyrics and chords for offline use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/lb1.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/lb2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/lb3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/lb6.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/1zt3twVSTyN4NsqANr4uRDwg400qvfq-J/view?usp=sharing"
              target="_blank"
              rel="Demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Demo Video
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent5 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              Bus Reservation System for a Bus Company.Book tickets add routes
              and manage reservations. Also has a user dashboard and admin
              dashboard for manage income and Customer Details.
            </span>{" "}
            <br />
            This individual project is a Booking Ticket Management System using
            JavaFX and SceneBuilder. Integrated database functionalities for
            ticket management, performed CRUD operations, and implemented
            interactive charts for data visualization. Designed a user-friendly
            interface using CSS for enhanced user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/bm2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/bm3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/bm4.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/bm5.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/1Dk_Vy4wRoWFXv-ZB_vN_2aaBx07b7Usq/view?usp=sharing"
              target="_blank"
              rel="Demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Demo Video
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent6 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              Library Book Management System is a platform that helps you manage
              your library with ease.
            </span>{" "}
            <br />
            This individual project is a Library Book Management System using
            JavaFX and SceneBuilder.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/book2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/book3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/book4.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/book5.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/1mMSIwjTP3hj97JYCZsXA5ocAnGF-KHiQ/view?usp=sharing"
              target="_blank"
              rel="Demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Demo Video
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent7 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              Hotel Management System is a platform that helps you manage your
              hotel with ease.
            </span>{" "}
            <br />
            This individual project is a Food Ordering System for a Hotel using
            JavaFX and SceneBuilder.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/fos2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/fos3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/fos4.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/fos5.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/1-iceIYrtDcqvkvodRROg5-cGhQIi4u_s/view?usp=sharing"
              target="_blank"
              rel="Demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Demo Video
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const DummyContent8 = () => {
  return (
    <>
      {Array.from({ length: 1 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
              Automatic Hand Washing and Waste Management System.
            </span>{" "}
            <br />
            We designed and built a microcontroller-based handwashing system
            that recycles wastewater by adding chlorine to kill germs and
            bacteria. The system uses a step-by-step cleaning process to purify
            the water to a drinkable level. I led the project, overseeing the
            design and mechanism development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/hp1.jpeg"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/hp2.jpeg"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/hp3.jpeg"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/hp4.jpeg"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://drive.google.com/file/d/1mK-gaQGij9n6r-E46ctW-xzSb05HIicp/view"
              target="_blank"
              rel="Demo"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              3D Model
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

const webProjects = [
  {
    category: "Voom.ai",
    title: "You can do more with AI.",
    src: "/projectPhotos/voom.png",
    content: <DummyContent />,
  },
  {
    category: "Rise-up mora 2024",
    title: "Cv collection and Interview management system",
    src: "/projectPhotos/rise.png",
    content: <DummyContent2 />,
  },
];

const mobileApplications = [
  {
    category: "CareSync",
    title: "Connect with your personal Doctor.",
    src: "/projectPhotos/ss1.png",
    content: <DummyContent3 />,
  },
  {
    category: "LyricBase",
    title: "Explore Sing and Share Lyrics.",
    src: "/projectPhotos/lb.png",
    content: <DummyContent4 />,
  },
];

const desktopApplications = [
  {
    category: "Bus Reservation System",
    title: "Bus Reservation System for a Bus Company.Book your tickets now.",
    src: "/projectPhotos/bm2.png",
    content: <DummyContent5 />,
  },
  {
    category: "Library Book Management System",
    title: "Manage your Library with ease.",
    src: "/projectPhotos/book1.png",
    content: <DummyContent6 />,
  },
  {
    category: "Hotel Management System",
    title: "Food Ordering System for a Hotel.",
    src: "/projectPhotos/fos1.png",
    content: <DummyContent7 />,
  },
];

const microControllerProjects = [
  {
    category: "Automatic Hand Washing and Waste Management System",
    title:
      "Sustainable and Eco-friendly solution for hand washing and waste management.",
    src: "/projectPhotos/hp1.jpeg",
    content: <DummyContent8 />,
  },
];

export default ProfilePage;
