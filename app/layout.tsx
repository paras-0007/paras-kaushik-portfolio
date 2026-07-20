import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Paras Kaushik — AI Engineer",
    description: "AI engineer building production-grade computer vision, LLM, VLM, RAG, OCR, and agentic systems.",
    openGraph: {
      title: "Paras Kaushik — AI Engineer",
      description: "Multimodal AI systems that perform in the real world.",
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024, alt: "Paras Kaushik — AI Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Paras Kaushik — AI Engineer",
      description: "Multimodal AI systems that perform in the real world.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
