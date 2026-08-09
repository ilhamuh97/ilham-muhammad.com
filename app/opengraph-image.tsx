import { ImageResponse } from "next/og";
import { siteMetadata } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteMetadata.title;

export default async function OpengraphImage() {
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
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#f97316",
            marginBottom: 24,
          }}
        >
          Software Engineer
        </div>
        <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 1.05 }}>
          {siteMetadata.authorName}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#a3a3a3",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          {siteMetadata.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
