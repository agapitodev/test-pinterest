export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Este es el layout para el área de autenticación</h1>
      <div>{children}</div>
    </div>
  );
}
