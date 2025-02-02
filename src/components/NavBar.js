import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from './Icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, ClassName = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${ClassName} relative group overflow-hidden`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full px-6 py-4 lg:px-32 lg:py-6 font-bold flex items-center justify-between bg-light dark:bg-dark relative">
      {/* Navigation Links for Desktop */}
      <nav className="hidden lg:flex items-center justify-center space-x-8">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/researchs" title="Researchs" />
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-dark focus:outline-none">
          {isMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Social Icons */}
      <nav className="flex items-center justify-center">
        <motion.a
          href="https://x.com/tharuka_t_k"
          target="_blank"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/TharukaKalansuriya"
          target="_blank"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/tharuka-kalansuriya-1577461aa"
          target="_blank"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://pin.it/5HWZ3xpQO"
          target="_blank"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://pin.it/5HWZ3xpQO"
          target="_blank"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>

      {/* Centered Logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Logo />
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black/50 p-6 space-y-4 text-white shadow-lg z-50 transition-all duration-300 ease-in-out">

          <CustomLink href="/" title="Home" ClassName="block text-white text-lg" />
          <CustomLink href="/about" title="About" ClassName="block text-white text-lg" />
          <CustomLink href="/projects" title="Projects" ClassName="block text-white text-lg" />
          <CustomLink href="/researchs" title="Researchs" ClassName="block text-white text-lg" />
        </div>
      )}
    </header>
  );
};

export default NavBar;
