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
        className={`fixed top-0 right-0 h-full w-64 bg-background shadow-md transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
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
      </div>
    </div>
  );
}
