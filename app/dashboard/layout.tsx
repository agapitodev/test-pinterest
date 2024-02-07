export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Este es el layout para el área del dashboard</h1>
      <div>{children}</div>
    </div>
  );
}
