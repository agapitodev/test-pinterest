'use client';

import { Typography } from '@/app/_components/ui/base';
import { InfiniteGrid, CardImage } from '@/app/_components/ui/dashboard';
import { ImageDetail } from '@/app/_components/dashboard';
import { Image } from '@/app/_lib/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

interface GridImagesProps {
  images: Image[];
  fetchImages: () => void;
}

export default function GridImages(props: Readonly<GridImagesProps>) {
  const [imageSelected, setImageSelected] = useState<Image | null>(null);

  return (
    <>
      <InfiniteGrid>
        <InfiniteScroll
          dataLength={props.images.length}
          next={props.fetchImages}
          hasMore
          loader={<Typography>Loading...</Typography>}
          endMessage={<Typography>No more data to load.</Typography>}
        >
          {props.images.map((image, index) => (
            <CardImage
              key={`${image.id}-${index}`}
              image={image}
              setImageSelected={setImageSelected}
            />
          ))}
        </InfiniteScroll>
      </InfiniteGrid>
      {imageSelected && (
        <ImageDetail
          image={imageSelected}
          setImageSelected={setImageSelected}
        />
      )}
    </>
  );
}
