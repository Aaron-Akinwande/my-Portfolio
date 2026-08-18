import React from "react";
import Aaron_Akinwande_CV from "../assets/001-Aaron_Akinwande_CV.pdf";
import AaronDP from "../assets/AaronDP.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a12]"
      id="home"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto md:px-10 px-7 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
            >
              <SparklesIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Available for Full-time and Freelance
              </span>
            </motion.div>

            <motion.h6
              className="text-lg md:text-xl text-gray-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hello, I'm
            </motion.h6>

            <motion.h1
              className="font-bold text-5xl md:text-7xl my-4 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Akinwande-Ajose
              <br />
              <span className="text-primary">Aaron</span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 my-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <CodeBracketIcon className="w-8 h-8 text-primary" />
              <p className="text-xl md:text-2xl font-semibold text-gray-300">
                Front-End Developer
              </p>
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg md:w-[500px] leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I craft beautiful, responsive web experiences that engage users
              and drive results. Specialized in modern JavaScript frameworks and
              UI/UX design.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link to="projects" smooth={true} spy={true} offset={-80}>
                <button className="group px-8 py-3.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  View My Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>

              <a
                href="https://drive.google.com/uc?export=download&id=1tFP4fV2pp4YyeZIrYgoBNPfOaFoWs9kE"
                download="Aaron_Akinwande_CV"
              >
                <button className="group px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-primary/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  Download CV
                </button>
              </a>
            </motion.div>

            {/* Social links or stats */}
            <motion.div
              className="flex gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-gray-400 text-sm mt-1">Projects Done</p>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <h3 className="text-3xl font-bold text-white">3+</h3>
                <p className="text-gray-400 text-sm mt-1">Years Experience</p>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-600/30 to-primary/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                <img
                  src={AaronDP}
                  alt="Aaron Display Picture"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
