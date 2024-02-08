/* eslint-disable @next/next/no-img-element */
'use client';

import { Image } from '@/app/_lib/types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  cursor: pointer;
  & > img {
    max-width: 100%;
  }
`;

interface CardImageProps {
  image: Image;
  setImageSelected: (image: Image) => void;
}

export default function CardImage(props: Readonly<CardImageProps>) {
  return (
    <ImageContainer onClick={() => props.setImageSelected(props.image)}>
      <img src={props.image.link} alt={props.image.id} loading="lazy" />
    </ImageContainer>
  );
}
