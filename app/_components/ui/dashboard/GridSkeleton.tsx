'use client';

import styled, { keyframes } from 'styled-components';
import { Grid } from '@/app/_components/ui/base';

const blink = keyframes`
  from {
    opacity: 0;
  }

  to {
    transform: 1;
  }
`;

const FakeImage = styled.div<{ $height: number }>`
  border-radius: 0.5rem;
  background: rgb(var(--primary-rgb));
  height: ${(props) => props.$height}px;
  width: 100%;
  animation: 1s ${blink} linear infinite alternate;
`;

export default function GridSkeleton() {
  return (
    <Grid>
      <FakeImage $height={340} />
      <FakeImage $height={430} />
      <FakeImage $height={600} />
      <FakeImage $height={240} />
      <FakeImage $height={540} />
      <FakeImage $height={140} />
      <FakeImage $height={300} />
      <FakeImage $height={640} />
      <FakeImage $height={400} />
      <FakeImage $height={340} />
      <FakeImage $height={540} />
      <FakeImage $height={180} />
      <FakeImage $height={340} />
      <FakeImage $height={430} />
      <FakeImage $height={600} />
      <FakeImage $height={240} />
      <FakeImage $height={540} />
      <FakeImage $height={140} />
      <FakeImage $height={300} />
      <FakeImage $height={640} />
      <FakeImage $height={400} />
      <FakeImage $height={340} />
      <FakeImage $height={540} />
      <FakeImage $height={180} />
    </Grid>
  );
}
