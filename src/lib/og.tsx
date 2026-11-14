import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const colors = {
  dark: "#0f1215",
  card: "#1a1f24",
  border: "#334155",
  light: "#f1f5f9",
  muted: "#94a3b8",
  primary: "#f59e0b",
  secondary: "#2dd4bf",
};

type OgImage = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: string[];
  accent?: "primary" | "secondary";
};

/** Shared 1200x630 social card, used by every opengraph-image route. */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
  tags = [],
  accent = "primary",
}: OgImage) {
  const accentColor = colors[accent];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: colors.dark,
          backgroundImage: `radial-gradient(circle at 15% 20%, rgba(245,158,11,0.18), transparent 45%), radial-gradient(circle at 85% 85%, rgba(45,212,191,0.16), transparent 45%)`,
          color: colors.light,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: colors.dark,
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: accentColor,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 34 ? 60 : 72,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.4,
              color: colors.muted,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {tags.slice(0, 5).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: `2px solid ${colors.border}`,
                backgroundColor: colors.card,
                fontSize: 24,
                color: accentColor,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
