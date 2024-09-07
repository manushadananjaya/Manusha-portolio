"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function BlogsPage() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        <h2 className="max-w-7xl items-center mx-auto my-10 text-4xl text-center md:text-5xl font-bold text-neutral-200 dark:text-white font-sans">
          My Blog Posts
        </h2>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Learn how to manage asynchronous code in JavaScript with call-back functions...",
    title: "What is call-back hell in JavaScript?",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tl1EhOojSZaOf77KxsH1-Q.png",
    ctaText: "Read",
    ctaLink:
      "https://medium.com/@manushadananjaya/what-is-call-back-hell-in-javascript-163a8f2fbac7",
    content: () => {
      return (
        <p>
          Node Js is all about asynchronous code. With Traditionally implemented
          with call-back functions. Modern Javascript has new tools to deal with
          asynchronous code. Such as Promises and Async Await.
          <br />
          For an example let&apos;s do with fun API such as the dog API link —
          https://dog.ceo/dog-api/documentation/breed First, we going to create
          a read file function using the file system module.
        </p>
      );
    },
  },
  {
    description:
      "Learn how to use React hooks to write clean functional components...",
    title: "What are the rules of React hooks?",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*eYHdhc5VuaJVAtZF",
    ctaText: "Read",
    ctaLink:
      "https://medium.com/@manushadananjaya/what-are-the-rules-of-react-hooks-9bc207123ca4",
    content: () => {
      return (
        <p>
          React Hooks has changed the teachings of React to help us write more
          clean functional components that are easy to read, easy to write, and
          easy to test. Unfortunately, like all powerful tools, there are some
          best practices to follow and rules to obey in order to not fall into
          the most common pitfalls and make our applications great again. Today
          we will focus on the four basic rules of hooks in React and why it is
          important to follow these rules.
        </p>
      );
    },
  },

  {
    description:
      "Learn how to master useEffect in React by handling side effects and dependencies...",
    title:
      "Master useEffect in React by handling side effects and dependencies",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Zi3bbJuxKjzBUJ8fpBoJ-Q.png",
    ctaText: "Read",
    ctaLink:
      "https://medium.com/@manushadananjaya/master-useeffect-in-react-by-handling-side-effects-and-dependencies-0352a8ef3acd",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Learn how to write multiple promises simultaneously...",
    title: "How to write multiple promises simultaneously",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4bTsQ76ZafPhGMHdpJ4AEg.png",
    ctaText: "Read",
    ctaLink:
      "https://medium.com/@manushadananjaya/how-to-write-multiple-promises-simultaneously-616a39f7bcd3",
    content: () => {
      return (
        <p>
          Let&apos;s try to get random 3 API calls for dogs&apos; not just one. So we
          simply await 3 API calls one after the other. like this, 3 API calls
          But why do we wait second API call and wait for the first one and the
          third API call waits for the second one? That would add unnecessary
          waiting time when we could just run all the promises at the same time.
          Now let me show you the solution for this how we call these 3 promises
          at the same time. the solution is we do not want to await the promise
          instead we can save the promise into a variable. so again we want to
          now save the promise and not the resolved value of the promise.
        </p>
      );
    },
  },
  {
    description: "Learn how to master Java programming...",
    title:
      "10 Things You Need to know before diving into learn JAVA Programming",
    src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gfYBo3opGEcFcXczGtDzyA.jpeg",
    ctaText: "Read",
    ctaLink:
      "https://medium.com/@manushadananjaya/10-things-you-need-to-know-before-diving-into-learn-java-programming-b138b60ba775",
    content: () => {
      return (
        <p>
          1. Basic Programming Concepts You must know about basic programming
          concepts like variables, data types, control structures (if
          conditions, loops), data structures, functions and methods, and mainly
          object-oriented concepts like inheritance encapsulation polymorphism
          classes objects, etc. <br /> 2. Knowledge of Java’s syntax pattern
          Java syntaxes are mostly influenced by C and C++. If you are familiar
          with C or C++ you don’t have to worry about Java’s syntax pattern. You
          have to know how to declare variables write conditional statements
          loops functions, and others using Java syntax pattern. <br /> 3.
          Object Oriented Programming Concepts Java is an object-oriented
          language so understanding OOP concepts like Classes, Inheritance,
          Polymorphism, and Encapsulation is very important to write Java
          programs effectively.
        </p>
      );
    },
  },
];
