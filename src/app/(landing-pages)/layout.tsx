import { LandingNav } from "@/components/nav/landing-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LandingNav />
      {children}
    </>
  );
}
