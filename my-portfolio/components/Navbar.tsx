import Link from "next/link";
import { JSX, SVGProps } from "react";
import MobileNav from "./MobileNav"; // Import the MobileNav component

export default function Component() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-bold">Manusha Dananjaya</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

