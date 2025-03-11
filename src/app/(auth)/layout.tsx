export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"bg-bayfi-grey-300 h-screen"}>
      {children}
    </div>
  );
}
