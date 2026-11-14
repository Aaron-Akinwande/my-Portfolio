import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { FilterTabs } from "@/components/ui/FilterTabs";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups, skillTabs } from "@/content/skills";
import type { SkillGroup, SkillTrack } from "@/content/skills";

const trackStyles: Record<SkillTrack, { line: string; badge: string }> = {
  Frontend: {
    line: "from-primary to-primary-hover",
    badge: "text-primary border-primary/30 bg-primary/10",
  },
  Cloud: {
    line: "from-secondary to-secondary-hover",
    badge: "text-secondary border-secondary/30 bg-secondary/10",
  },
  Shared: {
    line: "from-tertiary to-light",
    badge: "text-tertiary border-border-slate bg-dark-tertiary",
  },
};

function SkillGroupBlock({ group, index }: { group: SkillGroup; index: number }) {
  const style = trackStyles[group.track];

  return (
    <div
      className="mb-16 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-8 h-0.5 rounded-full bg-linear-to-r ${style.line}`} />
        <h3 className="text-light text-xl md:text-2xl font-bold">
          {group.category}
        </h3>
        <span
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${style.badge}`}
        >
          {group.track}
        </span>
        <div className="flex-1 h-0.5 bg-linear-to-r from-border-slate to-transparent rounded-full" />
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {group.items.map(({ name, description, Icon, color }) => (
          <li
            key={name}
            className="group relative bg-dark-secondary border border-border-slate rounded-2xl p-5 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center min-h-[200px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-linear-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10 w-16 h-16 mb-4 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <div className="w-14 h-14 bg-dark rounded-lg flex items-center justify-center">
                <Icon aria-hidden="true" className="w-8 h-8" style={{ color }} />
              </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <h4 className="text-light text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {name}
              </h4>
              <p className="text-tertiary text-xs leading-relaxed">
                {description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:px-10 px-7 pt-16 pb-20 relative z-10">
        <Reveal className="mb-10 text-center">
          <h2
            id="services-title"
            className="text-light font-bold text-3xl md:text-4xl mb-3"
          >
            Services & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-tertiary text-base max-w-2xl mx-auto">
            A frontend-first skill set, backed by growing cloud and
            infrastructure expertise
          </p>
        </Reveal>

        <FilterTabs
          label="Filter skills"
          layoutId="activeServiceTab"
          tabs={skillTabs}
          tabsClassName="flex flex-wrap justify-center gap-3 mb-12"
          items={skillGroups.map((group, index) => ({
            key: group.category,
            track: group.track,
            node: <SkillGroupBlock group={group} index={index} />,
          }))}
        />

        <Reveal delay={0.2} className="mt-4 text-center">
          <p className="text-tertiary text-base mb-4">Need a custom solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-primary to-secondary text-dark rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Let&apos;s Talk
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
