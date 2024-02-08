import { AuthContainer } from '@/app/_components/ui/auth';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthContainer>{children}</AuthContainer>;
}
