import React from "react";
import { motion } from "framer-motion";
import services from "../../public/services.js";

const Services = () => {
  return (
    <div className="mt-16">
      {/* Section header */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-white font-bold text-3xl md:text-4xl mb-3">
          Services & <span className="text-primary">Expertise</span>
        </h1>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Comprehensive solutions tailored to bring your digital vision to life
        </p>
      </motion.div>

      {/* Service categories */}
      {services?.map((group, groupIndex) => (
        <motion.div
          key={groupIndex}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
        >
          {/* Category header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              {group.category}
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-full"></div>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {group?.items?.map((service, index) => {
              const IconComponent = service.Icon;

              return (
                <motion.div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-gray-800 rounded-2xl p-5 hover:border-primary/40 transition-all duration-500 flex flex-col items-center text-center min-h-[200px] overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Decorative corner */}
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Icon container */}
                  <div className="relative z-10 w-16 h-16 mb-4 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-14 h-14 bg-[#0a0a12] rounded-lg flex items-center justify-center">
                      <IconComponent
                        className="w-8 h-8 transition-all duration-300"
                        style={{ color: service.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h6 className="text-white text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h6>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-gray-400 text-base mb-4">Need a custom solution?</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300"
        >
          Let's Talk
          <svg
            className="w-5 h-5"
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
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
