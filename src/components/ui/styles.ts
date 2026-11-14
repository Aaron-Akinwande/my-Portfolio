/**
 * Shared class recipes. Every button, card and chip on the site comes from
 * here, so a visual change is made once.
 */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-[color,background-color,border-color,scale] duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  secondary:
    "border border-line bg-surface text-ink hover:border-line-strong hover:bg-surface-raised",
  ghost: "text-ink hover:bg-surface-raised",
};

const buttonSizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-6 text-base",
};

export function button(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
) {
  return `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]}`;
}

/** Bordered surface used for every card. */
export const card = "rounded-2xl border border-line bg-surface";

/** Card that responds to hover, for cards that are links. */
export const cardInteractive = `${card} transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-card`;

type ChipVariant = "default" | "solid" | "outline";

const chipVariants: Record<ChipVariant, string> = {
  default: "border-transparent bg-surface-raised text-ink",
  solid: "border-transparent bg-accent text-on-accent",
  outline: "border-line text-muted",
};

export function chip(variant: ChipVariant = "default") {
  return `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${chipVariants[variant]}`;
}

/** Text link with an underline that strengthens on hover. */
export const textLink =
  "font-medium text-link underline decoration-highlight decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-link";

/** Arrow link used for "see more" style navigation. */
export const arrowLink =
  "group inline-flex items-center gap-1.5 font-medium text-link transition-colors duration-200 hover:text-ink";
