'use client';

import styled from 'styled-components';
import { Container } from '@/app/_components/ui/base';

const AuthFormContainer = styled(Container)`
  padding: 1rem 4rem 2rem;
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default AuthFormContainer;
