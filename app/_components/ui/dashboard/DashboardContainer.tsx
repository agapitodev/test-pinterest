'use client';

import styled from 'styled-components';
import { Sidebar } from '.';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 150px 1fr;
  padding: 5rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Content = styled.div`
  grid-column-start: 2;
`;

export default function DashboardContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  );
}
