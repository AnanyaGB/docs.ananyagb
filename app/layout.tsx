import "./globals.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Layout from "@/components/base-app/layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Docs - AnanyaGB",
  description: "The documentation site for all my projects and apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7121071971076944"
        crossOrigin="anonymous"
      ></script>
      <body className={`${GeistSans.className} ${GeistMono.variable}`}>
        <Suspense fallback={<Loading />}>
          <Layout>{children}</Layout>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
