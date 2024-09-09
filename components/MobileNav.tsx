"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-muted-foreground hover:text-foreground"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-background shadow-md transform transition-transform ${
          isOpen ? "translate-x-1/2" : "translate-x-full"
        }`}
      >
        <div className="flex p-4">
          <button
            onClick={toggleMenu}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close navigation"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-start gap-4 p-4">
          <Link
            href="#home"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={toggleMenu}
            prefetch={false}
          >
            Home
          </Link>

          <Link
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={toggleMenu}
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={toggleMenu}
            prefetch={false}
          >
            Experiences
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={toggleMenu}
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-auto p-4">
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Connect with me
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com/manushadananjaya"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <GitlabIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/manusha-dananjaya-048098247/"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function GitlabIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
