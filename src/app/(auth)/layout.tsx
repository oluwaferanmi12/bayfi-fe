export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{ height: "100dvh", maxHeight: "100dvh", minHeight: "100dvh" }}
      className={"bg-bayfi-grey-300"}
    >
      {children}
    </div>
  );
}
