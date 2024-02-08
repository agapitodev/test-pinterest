'use client';

import styled from 'styled-components';
import { FloatingActionButton, TextField } from '@/app/_components/ui/base';
import { IoArrowRedoSharp } from 'react-icons/io5';

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`;

const CustomFAB = styled(FloatingActionButton)`
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  position: absolute;
  right: 0.625rem;
  top: 0.625rem;
`;

interface SearchBoxProps {
  query: string;
  setQuery: (newQuery: string) => void;
  onSearch: () => void;
}

export default function SearchBox(props: Readonly<SearchBoxProps>) {
  return (
    <Container>
      <TextField
        placeholder="Search"
        value={props.query}
        onChange={(event) => props.setQuery(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') props.onSearch();
        }}
      />
      <CustomFAB onClick={props.onSearch}>
        <IoArrowRedoSharp />
      </CustomFAB>
    </Container>
  );
}
