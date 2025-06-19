"use client";


import Container from "../global/Container";
import Logo from "./Logo";

const Navbar = () => {




  return (
    <header className="fixed top-0  w-full z-50 bg-white border-b px-5 sm:px-10 md:px-12 lg:px-5">
      <Container className="flex items-center justify-start h-20 ">
        {/* Logo */}
        <div className="flex items-center justify-center p-0 m-0">
          <Logo />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
