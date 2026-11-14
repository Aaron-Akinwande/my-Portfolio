import { skillGroups } from "@/content/skills";

const skills = skillGroups.flatMap((group) => group.items);

/**
 * A band of skills that slides sideways as the page scrolls.
 * Purely decorative (the same skills are listed on the About page),
 * so it is hidden from assistive technology.
 */
export function SkillTicker() {
  return (
    <div
      aria-hidden="true"
      className="fade-x overflow-hidden border-b border-line bg-surface py-4"
    >
      <ul className="scroll-slide flex w-max items-center gap-9 pl-9">
        {[...skills, ...skills].map(({ name, Icon }, index) => (
          <li
            key={`${name}-${index}`}
            className="flex items-center gap-2 font-display text-sm font-medium whitespace-nowrap text-muted"
          >
            <Icon className="size-4" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
