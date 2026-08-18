import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../../public/services.js";

const tabs = [
  { id: "All", label: "All Skills" },
  { id: "Frontend", label: "Frontend" },
  { id: "Cloud", label: "Cloud & DevOps" },
  { id: "Shared", label: "Tooling" },
];

const tabAccent = {
  All: "from-primary to-secondary",
  Frontend: "from-primary to-primary-hover",
  Cloud: "from-secondary to-secondary-hover",
  Shared: "from-tertiary to-light",
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredGroups =
    activeTab === "All"
      ? services
      : services?.filter((group) => group.track === activeTab);

  return (
    <div className="mt-16">
      {/* Section header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-light font-bold text-3xl md:text-4xl mb-3">
          Services & <span className="text-primary">Expertise</span>
        </h1>
        <p className="text-tertiary text-base max-w-2xl mx-auto">
          A frontend-first skill set, backed by growing cloud and infrastructure
          expertise
        </p>
      </motion.div>

      {/* Tab filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                isActive
                  ? "text-dark border-transparent"
                  : "text-tertiary border-border-slate hover:text-light hover:border-primary/40"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeServiceTab"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${tabAccent[tab.id]}`}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Service categories */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredGroups?.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-8 h-0.5 rounded-full bg-gradient-to-r ${
                    group.track === "Cloud"
                      ? "from-secondary to-secondary-hover"
                      : group.track === "Frontend"
                        ? "from-primary to-primary-hover"
                        : "from-tertiary to-light"
                  }`}
                ></div>
                <h2 className="text-light text-xl md:text-2xl font-bold">
                  {group.category}
                </h2>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                    group.track === "Cloud"
                      ? "text-secondary border-secondary/30 bg-secondary/10"
                      : group.track === "Frontend"
                        ? "text-primary border-primary/30 bg-primary/10"
                        : "text-tertiary border-border-slate bg-dark-tertiary"
                  }`}
                >
                  {group.track}
                </span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-border-slate to-transparent rounded-full"></div>
              </div>

              {/* Service cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {group?.items?.map((service, index) => {
                  const IconComponent = service.Icon;

                  return (
                    <motion.div
                      key={service.id}
                      className="group relative bg-dark-secondary border border-border-slate rounded-2xl p-5 hover:border-primary/40 transition-all duration-500 flex flex-col items-center text-center min-h-[200px] overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.4 }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Decorative corner */}
                      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                      {/* Icon container */}
                      <div className="relative z-10 w-16 h-16 mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <div className="w-14 h-14 bg-dark rounded-lg flex items-center justify-center">
                          <IconComponent
                            className="w-8 h-8 transition-all duration-300"
                            style={{ color: service.color }}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex-1 flex flex-col justify-center">
                        <h6 className="text-light text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {service.name}
                        </h6>
                        <p className="text-tertiary text-xs leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-tertiary text-base mb-4">Need a custom solution?</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300"
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
