'use client';

import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  columns: 5;
  column-gap: 20px;
  & > * {
    break-inside: avoid;
    margin-bottom: 20px;
  }
`;

export default Grid;
