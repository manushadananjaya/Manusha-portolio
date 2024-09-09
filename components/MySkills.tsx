"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the Tab type
type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};
// BubbleImage Component for 3D Bubble Effect
const BubbleImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center p-4 rounded-full bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      whileHover={{ scale: 1.1, }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="rounded-md"
      />
    </motion.div>
  );
};


// Sections Data
const sections = [
  {
    title: "Programming Languages",
    value: "programming-languages",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { src: "/logos/java.png", alt: "Java" },
          { src: "/logos/python-logo.png", alt: "Python" },
          { src: "/logos/c-logo.png", alt: "C" },
          { src: "/logos/cpp.png", alt: "C++" },
          { src: "/logos/javascript.png", alt: "JavaScript" },
          { src: "/logos/typescript.png", alt: "TypeScript" },
        ].map((logo, idx) => (
          <BubbleImage key={idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    ),
  },
  {
    title: "Databases",
    value: "databases",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { src: "/logos/mysql.png", alt: "MySQL" },
          { src: "/logos/postgres.png", alt: "PostgreSQL" },
          { src: "/logos/mongo.png", alt: "MongoDB" },
          { src: "/logos/mssql.png", alt: "MSSQL" },
        ].map((logo, idx) => (
          <BubbleImage key={idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "frameworks",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { src: "/logos/react.png", alt: "React" },
          { src: "/logos/node.png", alt: "Node.js" },
          { src: "/logos/next.png", alt: "Next.js" },
          { src: "/logos/ex.png", alt: "Express" },
        ].map((logo, idx) => (
          <BubbleImage key={idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    ),
  },
  {
    title: "Mobile Development",
    value: "mobile",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <BubbleImage src="/logos/reactnative.png" alt="React Native" />
      </div>
    ),
  },
  {
    title: "Project Management",
    value: "pm",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { src: "/logos/clickup.png", alt: "ClickUp" },
          { src: "/logos/jira.png", alt: "Jira" },
          { src: "/logos/trello.png", alt: "Trello" },
        ].map((logo, idx) => (
          <BubbleImage key={idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    ),
  },
];


// Tabs Component
export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start overflow-auto no-visible-scrollbar max-w-full w-full space-x-4",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "relative px-4 py-2 rounded-full transition-colors duration-300",
              tabClassName,
              active.value === tab.value && activeTabClassName
            )}
          >
            {active.value === tab.value && (
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
        key={active.value}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className={cn("mt-8", contentClassName)}
      >
        {active.content}
      </motion.div>
    </>
  );
};

// Main MySkills Component
export function MySkills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h2 className="text-4xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans">
        My Skills and Technologies
      </h2>
      <Tabs
        tabs={sections}
        containerClassName="my-8"
        activeTabClassName="bg-blue-500 text-white"
        tabClassName="text-gray-500 hover:text-blue-500"
        contentClassName="py-10"
      />
    </div>
  );
}
