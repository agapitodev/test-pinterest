'use client';

import { useState } from 'react';
import { SearchBox } from '@/app/_components/ui/dashboard';

interface SearchImagesProps {
  onSearch: (query: string) => void;
}

export default function SearchImages(props: Readonly<SearchImagesProps>) {
  const [query, setQuery] = useState('');
  return (
    <SearchBox
      query={query}
      setQuery={setQuery}
      onSearch={() => props.onSearch(query)}
    />
  );
}
