import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import QueryProvider from "@/react-query/query-provider";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { RouteMetaManager } from "@/components/meta/route-meta-manager";

export const metadata: Metadata = {
  title: {
    default: "Bayfi",
    template: "%s | Bayfi",
  },
  description:
    "Trade gift cards and crypto, transfer funds, and manage digital transactions with Bayfi.",
  applicationName: "Bayfi",
  openGraph: {
    title: "Bayfi",
    description:
      "Trade gift cards and crypto, transfer funds, and manage digital transactions with Bayfi.",
    type: "website",
    siteName: "Bayfi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayfi",
    description:
      "Trade gift cards and crypto, transfer funds, and manage digital transactions with Bayfi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-grotesk-regular`}>
        <AntdRegistry>
          <QueryProvider>
            <RouteMetaManager />
            {children}
          </QueryProvider>
          <Toaster richColors position="top-right" />
        </AntdRegistry>
      </body>
    </html>
  );
}
