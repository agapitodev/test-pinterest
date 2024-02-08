'use client';

import styled from 'styled-components';

const InfiniteGrid = styled.div`
  & .infinite-scroll-component {
    width: 100%;
    columns: 5;
    column-gap: 20px;
    & > * {
      break-inside: avoid;
      margin-bottom: 20px;
    }
  }
`;

export default InfiniteGrid;
