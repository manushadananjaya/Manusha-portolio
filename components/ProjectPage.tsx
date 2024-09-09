"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { motion } from "framer-motion";

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
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            priority
          />
        </div>
      ))}
    </>
  );
};

const webProjects = [
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
