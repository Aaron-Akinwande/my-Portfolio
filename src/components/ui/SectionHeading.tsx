import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  className = "mb-12",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={`${className} ${centered ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}
      >
        <div className="w-12 h-1 bg-linear-to-r from-primary to-secondary rounded-full" />
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
          {eyebrow}
        </span>
        {centered && (
          <div className="w-12 h-1 bg-linear-to-l from-primary to-secondary rounded-full" />
        )}
      </div>
      <h2
        id={id}
        className={`text-light font-bold text-4xl md:text-5xl ${lead ? "mb-4" : ""}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`text-tertiary text-lg leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "md:w-2/3"
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
