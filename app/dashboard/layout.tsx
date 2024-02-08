import { DashboardContainer } from '@/app/_components/ui/dashboard/';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardContainer>{children}</DashboardContainer>;
}
