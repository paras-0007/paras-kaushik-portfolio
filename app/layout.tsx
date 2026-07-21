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
    title: "Paras Kaushik - AI Engineer & Product Founder",
    description: "AI engineer and product founder building model-to-market products across document intelligence, voice agents, automation, and applied AI.",
    openGraph: {
      title: "Paras Kaushik - AI Engineer & Product Founder",
      description: "Models are useful. Systems create impact.",
      type: "website",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024, alt: "Paras Kaushik - AI Engineer & Product Founder" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Paras Kaushik - AI Engineer & Product Founder",
      description: "Models are useful. Systems create impact.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
