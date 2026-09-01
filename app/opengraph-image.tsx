import { ImageResponse } from "next/og";

export const alt = "Matt Downey — Full-Stack Software Engineer";
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
          padding: "80px",
          background: "#04050a",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(34, 211, 238, 0.25), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: -1,
            marginBottom: 48,
          }}
        >
          MD
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Matt Downey
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#67e8f9",
            marginTop: 20,
          }}
        >
          Full-Stack Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: 28,
          }}
        >
          I build software that ships and scales.
        </div>
      </div>
    ),
    { ...size }
  );
}
