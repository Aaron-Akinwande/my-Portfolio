import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import email from "../assets/socials/sms.png";
import { FaLinkedin } from "react-icons/fa6";
import {
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tc9rase", "template_51j2i6l", form.current, {
        publicKey: "PHrmbehw-xpmpFuKd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        },
      );
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: facebook,
      url: "https://web.facebook.com/aaron.akinwande/",
    },
    {
      name: "Instagram",
      icon: instagram,
      url: "https://www.instagram.com/aaron_akinwande/",
    },
    {
      name: "Email",
      icon: email,
      url: "mailto:aaronakinwande@gmail.com",
    },
  ];

  return (
    <div
      className="md:px-10 px-7 py-20 bg-dark relative overflow-hidden"
      id="contact"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <div className="w-12 h-1 bg-gradient-to-l from-primary to-secondary rounded-full"></div>
          </div>
          <h1 className="text-light font-bold text-4xl md:text-5xl mb-4">
            Let's Work Together
          </h1>
          <p className="text-tertiary text-lg max-w-2xl mx-auto">
            Have a project — or a role — in mind? Let's talk about it.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info and socials */}
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Contact card */}
            <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-border-slate rounded-2xl p-8 mb-8">
              <h2 className="text-light font-bold text-2xl mb-4">
                Connect with me
              </h2>
              <p className="text-tertiary leading-relaxed mb-8">
                I'm always excited to discuss new projects, frontend or cloud
                opportunities, or ideas worth building. Let's talk.
              </p>

              {/* Social links */}
              <div className="space-y-4">
                <p className="text-tertiary text-sm font-semibold uppercase tracking-wider mb-4">
                  Follow Me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-border-slate rounded-xl flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -4 }}
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-6 h-6 object-contain filter brightness-110 group-hover:brightness-125 transition-all"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    </motion.a>
                  ))}

                  {/* LinkedIn with custom icon */}
                  <motion.a
                    href="https://www.linkedin.com/in/aaron-akinwande-ajose-720b18288"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative w-12 h-12 bg-white/5 backdrop-blur-sm border border-border-slate rounded-xl flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <FaLinkedin className="text-primary text-2xl group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-5">
                <p className="text-tertiary text-sm mb-1">Email</p>
                <a
                  href="mailto:aaronakinwande@gmail.com"
                  className="text-light font-semibold hover:text-primary transition-colors"
                >
                  aaronakinwande@gmail.com
                </a>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-5">
                <p className="text-tertiary text-sm mb-1">Location</p>
                <p className="text-light font-semibold">Lagos, Nigeria</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-border-slate rounded-2xl p-8">
              <h2 className="text-light font-bold text-2xl mb-2">
                Send me a message
              </h2>
              <p className="text-tertiary mb-8">
                Fill out the form below and I'll get back to you as soon as
                possible
              </p>

              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-tertiary text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 backdrop-blur-sm border border-border-slate rounded-xl py-3.5 px-4 text-light placeholder-tertiary/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-tertiary text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 backdrop-blur-sm border border-border-slate rounded-xl py-3.5 px-4 text-light placeholder-tertiary/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-tertiary text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 backdrop-blur-sm border border-border-slate rounded-xl py-3.5 px-4 text-light placeholder-tertiary/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-dark rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-3 bg-secondary/10 border border-secondary/30 rounded-xl p-4"
                >
                  <CheckCircleIcon className="w-6 h-6 text-secondary flex-shrink-0" />
                  <p className="text-secondary font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4"
                >
                  <ExclamationCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <p className="text-red-500 font-medium">
                    Failed to send message. Please try again.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
