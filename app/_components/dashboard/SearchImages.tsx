'use client';

import { useState } from 'react';
import { SearchBox } from '@/app/_components/ui/dashboard';

export default function SearchImages() {
  const [query, setQuery] = useState('');
  return (
    <SearchBox
      query={query}
      setQuery={setQuery}
      onSearch={() => alert(`searching: ${query}`)}
    />
  );
}
