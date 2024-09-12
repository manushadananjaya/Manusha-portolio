"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button, Tab } from "@headlessui/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="w-full px-3 h-full py-20">
      <h2 className="max-w-7xl items-center mx-auto text-4xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans">
        Get to know about my Projects
      </h2>

      <div className="flex flex-row items-center justify-center overflow-auto no-visible-scrollbar max-w-full w-full space-x-4 mt-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setSelectedIndex(idx)}
            className={`relative px-4 py-2 rounded-full transition-colors duration-300 ${
              selectedIndex === idx
                ? "bg-gray-200 dark:bg-blue-700 text-black dark:text-white"
                : "bg-transparent text-blue-700 dark:text-blue-100 hover:bg-white/[0.12] hover:text-white"
            }`}
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

      <motion.div
        key={selectedIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
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
          className="bg-white dark:bg-neutral-800 p-8 md:p-10 rounded-3xl mb-6 shadow-md"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl leading-relaxed font-sans max-w-3xl mx-auto mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/projectPhotos/voom.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/voom2.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/voom3.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
            <Image
              src="/projectPhotos/voom4.png"
              alt="project-photos"
              height={400}
              width={400}
              className="h-auto w-full rounded-xl object-cover"
              priority
            />
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="https://voom-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              Visit VOOM
            </Link>
            <Link
              href="https://github.com/manushadananjaya/voom"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
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
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

];

const desktopApplications = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

const microControllerProjects = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  
];

export default ProfilePage;
