/** Page background per theme, mirrored into the browser's theme-color. */
export const themeCanvas = { light: "#ffffff", dark: "#0b1f3a" } as const;

export type Theme = keyof typeof themeCanvas;

/**
 * Runs in <head> before first paint (see layout.tsx): applies the saved theme,
 * or the system setting on a first visit, so the page never flashes the wrong one.
 */
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;
