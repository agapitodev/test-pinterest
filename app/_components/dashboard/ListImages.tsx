'use client';

import { useState, useEffect } from 'react';
import { imagesApi } from '@/services';
import { SearchImages } from '@/app/_components/dashboard';
import { Suspense } from 'react';
import { GridSkeleton } from '@/app/_components/ui/dashboard';
import { GridImages } from '@/app/_components/dashboard';
import { Image } from '@/app/_lib/types';

export default function ListImages() {
  const [isSearching, setIsSearching] = useState(false);
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const response = await imagesApi.getImages(page);
      setImages((prev: Image[]) => [...prev, ...response]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchImagesByTag = async (query: string) => {
    setIsSearching(true);

    try {
      const response = await imagesApi.getImagesByTag(query);
      setImages(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchImages onSearch={fetchImagesByTag} />
      {isSearching ? (
        <GridSkeleton />
      ) : (
        <Suspense fallback={<GridSkeleton />}>
          <GridImages images={images} fetchImages={fetchImages} />
        </Suspense>
      )}
    </div>
  );
}
