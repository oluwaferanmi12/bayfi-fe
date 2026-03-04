import { LandingNav } from "@/components/nav/landing-nav";
import { MobileLandingNav } from "@/components/nav/MobileLandingNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
    <div className="fixed top-0 w-full z-20 hidden lg:block">
      <LandingNav />
    </div>
    <MobileLandingNav />
      {children}
    </div>
  );
}
