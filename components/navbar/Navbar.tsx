"use client";

import Container from "../global/Container";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="w-full z-50 bg-blue-950 border-b px-5 sm:px-10 md:px-12 lg:px-5">
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-white hover:text-blue-300 transition-colors"
          >
            About
          </a>
          <a
            href="#tracks"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Tracks
          </a>
          <a
            href="#registration"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Registration
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Contact
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Register Now
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
