import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** "prose" narrows the column for reading-heavy pages. */
  width?: "default" | "prose";
  className?: string;
};

/** Centres content and applies the page gutters. */
export function Container({
  children,
  width = "default",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 ${
        width === "prose" ? "max-w-4xl" : "max-w-6xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
