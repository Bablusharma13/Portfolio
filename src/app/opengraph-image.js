import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 14,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#fbbf24",
            fontFamily: "monospace",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#fbbf24",
            }}
          />
          {profile.title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -1,
            textTransform: "uppercase",
            lineHeight: 1,
            display: "flex",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#a8a29e",
            maxWidth: 900,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 18,
            color: "#78716c",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          marketxy.com · Next.js · Node.js
        </div>
      </div>
    ),
    { ...size }
  );
}
