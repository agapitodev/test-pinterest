'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { Container } from '@/app/_components/ui/base';

const CustomContainer = styled(Container)`
  min-height: 100vh;
  background: rgb(var(--background-dark-rgb));
`;

const Box = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 416px;
  border-radius: var(--border-radius);
  background: rgb(var(--background-rgb));
  box-shadow: 0px 0px 12px 10px rgba(0, 0, 0, 0.03);
`;

export default function AuthContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CustomContainer>
      <Box>
        {children}
        <Image
          src="/girls-background.png"
          alt="Girls"
          width={416}
          height={707}
          priority
        />
      </Box>
    </CustomContainer>
  );
}
