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
    title: "Paras Kaushik - AI Systems Engineer",
    description: "Paras Kaushik architects multimodal AI systems that turn unstructured data into reliable decisions at production scale.",
    openGraph: {
      title: "Paras Kaushik - AI Systems Engineer",
      description: "Unstructured data into decisions at production scale.",
      type: "website",
      images: [{ url: new URL("/og-v2.png", base).toString(), width: 1536, height: 1024, alt: "Paras Kaushik - AI Systems Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Paras Kaushik - AI Systems Engineer",
      description: "Unstructured data into decisions at production scale.",
      images: [new URL("/og-v2.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
