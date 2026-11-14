import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Optional link or button shown beside the heading on wide screens. */
  action?: ReactNode;
  className?: string;
};

/** Heading block for a section inside a page. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  action,
  className = "mb-10",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 flex items-center gap-2 text-sm font-medium text-muted">
            <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-highlight" />
            {eyebrow}
          </p>
        )}
        <h2 id={id} className="text-heading font-bold text-ink">
          {title}
        </h2>
        {lead && <p className="mt-3 text-lead text-muted">{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** The <h1> block at the top of an inner page. */
export function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <header className="animate-rise pt-14 pb-10 sm:pt-20 sm:pb-12">
      {eyebrow && (
        <p className="mb-4 flex items-center gap-2 text-sm font-medium text-muted">
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-highlight" />
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl text-title font-bold break-words text-ink">
        {title}
      </h1>
      {lead && <p className="mt-5 max-w-2xl text-lead text-muted">{lead}</p>}
      {children}
    </header>
  );
}
