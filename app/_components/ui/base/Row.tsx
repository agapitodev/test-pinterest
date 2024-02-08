'use client';

import styled from 'styled-components';

interface RowProps {
  $align?: 'start' | 'center' | 'end';
  $gutterX?: boolean;
}

const Row = styled.div<RowProps>`
  width: 100%;
  max-width: 64rem;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$align || 'start'};
  align-items: center;
  margin-top: ${(props) => (props.$gutterX ? '2rem' : 0)};
  margin-bottom: ${(props) => (props.$gutterX ? '2rem' : 0)};
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default Row;
