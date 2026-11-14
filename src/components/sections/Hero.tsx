import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CloudIcon,
  CodeBracketIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import portrait from "@/assets/aaron-akinwande-ajose.jpg";
import { RoleRotator } from "@/components/ui/RoleRotator";
import { roles, site, stats } from "@/content/site";

const roleStyles = {
  Frontend: { icon: CodeBracketIcon, color: "text-primary" },
  Cloud: { icon: CloudIcon, color: "text-secondary" },
} as const;

/** Entrance animations are plain CSS, so the hero paints without waiting for JavaScript. */
const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="max-w-7xl mx-auto md:px-10 px-7 pt-28 pb-24 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
          {/* Text */}
          <div className="flex-1 w-full min-w-0 text-light animate-slide-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-up"
              style={delay(100)}
            >
              <SparklesIcon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                {site.availability}
              </span>
            </div>

            <p
              className="text-lg md:text-xl text-tertiary font-medium animate-fade-in"
              style={delay(150)}
            >
              Hello, I&apos;m
            </p>

            <h1
              id="hero-title"
              className="font-bold text-[clamp(2.25rem,12vw,3rem)] leading-none lg:text-6xl xl:text-7xl my-4 bg-linear-to-r from-light via-slate-200 to-tertiary bg-clip-text text-transparent animate-fade-up"
              style={delay(200)}
            >
              Akinwande-Ajose
              <br />
              <span className="text-primary">Aaron</span>
            </h1>

            <div className="my-6 animate-fade-in" style={delay(300)}>
              <RoleRotator
                className="min-h-10 items-center"
                items={roles.map((role) => {
                  const { icon: Icon, color } = roleStyles[role.track];
                  return (
                    <p
                      key={role.text}
                      className={`flex items-center gap-3 text-xl lg:text-2xl font-semibold ${color}`}
                    >
                      <Icon className="w-7 h-7 shrink-0" />
                      {role.text}
                    </p>
                  );
                })}
              />
            </div>

            <p
              className="text-tertiary text-lg max-w-[500px] leading-relaxed mb-8 animate-fade-in"
              style={delay(400)}
            >
              {site.tagline}
            </p>

            <div
              className="flex flex-wrap gap-4 mt-8 animate-fade-up"
              style={delay(500)}
            >
              <a
                href="#projects"
                className="group px-8 py-3.5 bg-linear-to-r from-primary to-primary-hover text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={site.cvUrl}
                download="Aaron_Akinwande_CV"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white/5 backdrop-blur-xs border border-border-slate text-light rounded-lg font-semibold hover:bg-white/10 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download CV
              </a>
            </div>

            <dl
              className="flex gap-3 sm:gap-8 md:gap-4 lg:gap-8 mt-12 animate-fade-in"
              style={delay(600)}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col-reverse ${
                    index > 0 ? "border-l border-border-slate pl-3 sm:pl-8 md:pl-4 lg:pl-8" : ""
                  }`}
                >
                  <dt className="text-tertiary text-xs sm:text-sm mt-1">{stat.label}</dt>
                  <dd className="text-2xl sm:text-3xl font-bold text-light">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="flex-1 relative w-full animate-scale-in" style={delay(100)}>
            <div className="relative w-full max-w-[500px] mx-auto">
              <div
                aria-hidden="true"
                className="absolute -top-4 -left-4 w-72 h-72 bg-linear-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-pulse"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 w-72 h-72 bg-linear-to-br from-secondary/20 to-primary/30 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <Image
                  src={portrait}
                  alt={`Portrait of ${site.name}`}
                  preload
                  placeholder="blur"
                  sizes="(min-width: 768px) 500px, 90vw"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={delay(1200)}
      >
        <span className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center hover:border-primary transition-colors">
          <span className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </span>
      </a>
    </section>
  );
}
