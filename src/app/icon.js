import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141414",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
          <path
            d="M11 25 L17 13 L29 13"
            stroke="#fafafa"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="29" cy="13" r="2.6" fill="#fbbf24" />
          <circle cx="11" cy="25" r="2.2" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
