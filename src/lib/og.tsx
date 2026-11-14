import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Social cards always use the navy theme, whatever the visitor's setting. */
const colors = {
  navy: "#0b1f3a",
  navyRaised: "#12305a",
  navyLine: "#1b4078",
  white: "#ffffff",
  muted: "#a9bccf",
  babyBlue: "#89cff0",
  ink: "#071426",
};

type OgImage = {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: string[];
};

/** Shared 1200x630 social card, used by every opengraph-image route. */
export function renderOgImage({ eyebrow, title, subtitle, tags = [] }: OgImage) {
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
          backgroundColor: colors.navy,
          color: colors.white,
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
              backgroundColor: colors.babyBlue,
              color: colors.ink,
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
              color: colors.babyBlue,
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
              letterSpacing: -1.5,
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
                border: `2px solid ${colors.navyLine}`,
                backgroundColor: colors.navyRaised,
                fontSize: 24,
                color: colors.babyBlue,
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
