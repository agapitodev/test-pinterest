'use client';

import styled from 'styled-components';
import { Container } from '@/app/_components/ui/base';

const HomeContainer = styled(Container)`
  justify-content: space-between;
  padding: 6rem;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export default HomeContainer;
