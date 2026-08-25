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
            d="M17 12 L10 20 L17 28"
            stroke="#fafafa"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 12 L30 20 L23 28"
            stroke="#fafafa"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="21.5" y1="10" x2="18.5" y2="30" stroke="#fbbf24" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
