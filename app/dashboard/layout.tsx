'use client';

import { isAuthenticated } from '@/utils/Auth';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

import { DashboardContainer } from '@/app/_components/ui/dashboard/';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect('/');
    }
  }, []);
  return <DashboardContainer>{children}</DashboardContainer>;
}
