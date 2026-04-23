import React from "react";
import { motion } from "framer-motion";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import email from "../assets/socials/sms.png";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: facebook,
      url: "https://web.facebook.com/aaron.akinwande/",
      isImage: true,
    },
    {
      name: "Instagram",
      icon: instagram,
      url: "https://www.instagram.com/aaron_akinwande/",
      isImage: true,
    },
    {
      name: "Email",
      icon: email,
      url: "mailto:aaronakinwande@gmail.com",
      isImage: true,
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/aaron-akinwande-ajose-720b18288",
      isImage: false,
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Aaron-Akinwande",
      isImage: false,
    },
  ];

  return (
    <footer className="bg-[#0a0a12] border-t border-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto md:px-10 px-7 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-2xl">
                Aaron<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Frontend Developer passionate about creating beautiful, responsive
              web experiences that make a difference.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium">
                Frontend Developer
              </span>
              <span className="px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-xs font-medium">
                Cloud Engineer
              </span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.link}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:aaronakinwande@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors duration-300 block"
              >
                aaronakinwande@gmail.com
              </a>
              <p className="text-gray-400">Lagos, Nigeria</p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  whileHover={{ y: -4 }}
                >
                  {social.isImage ? (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-5 h-5 object-contain filter brightness-110 group-hover:brightness-125 transition-all"
                    />
                  ) : (
                    <social.icon className="text-gray-400 group-hover:text-primary text-lg transition-colors" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Akinwande-Ajose Aaron. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="w-5 h-5 text-white group-hover:animate-bounce" />
          </button>
        </motion.div>

        {/* Made with love */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm">
            Built using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
