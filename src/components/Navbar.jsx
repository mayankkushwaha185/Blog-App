import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".mobile-menu") && open) {
      setOpen(false);
    }
  };

  return (
    <div
      className="w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-12 bg-white shadow-md relative"
      onClick={handleClickOutside}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4">
        <Image src="logo.png" alt="Logo" w={32} h={32} />
        <span className="font-bold text-lg">Logo</span>
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-3xl focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 w-2/3 h-screen bg-white shadow-lg flex flex-col items-center gap-8 font-medium text-lg transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50 p-6`}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          Trending
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          Most Popular
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          About
        </Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Most Popular</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
