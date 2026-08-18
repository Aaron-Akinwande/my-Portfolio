import React, { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Services", link: "services" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  let [open, setOpen] = useState(false);
  let [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-primary/10 border-b border-border-slate"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto md:flex items-center justify-between py-5 md:px-10 px-7">
        {/* Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-dark font-bold text-xl">A</span>
          </div>
          <span className="text-light group-hover:text-primary transition-colors duration-300">
            Aaron<span className="text-primary">.</span>
          </span>
        </div>

        {/* Mobile menu button */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-light hover:text-primary transition-colors"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Navigation */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 md:bg-transparent bg-dark/98 backdrop-blur-md transition-all duration-500 ease-in ${
            open
              ? "top-16 shadow-lg border-b border-border-slate"
              : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              className="md:ml-6 md:my-0 my-7 text-base font-medium cursor-pointer"
              key={link.name}
              style={{ transitionDelay: open ? `${index * 50}ms` : "0ms" }}
            >
              <Link
                to={link.link}
                activeClass="text-primary"
                smooth={true}
                spy={true}
                offset={-80}
                className="text-tertiary hover:text-primary transition-colors duration-300 relative group"
                onClick={() => setOpen(false)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
          <li className="md:ml-6 md:my-0 my-7">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
