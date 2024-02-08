'use client';

import styled from 'styled-components';

const TextField = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: var(--small-border-radius);
  border: 1px solid rgb(var(--auxiliar-rgb));
  background: rgb(var(--background-dark-rgb));
  &::placeholder {
    color: rgb(var(--auxiliar-rgb));
  }
  &:focus {
    outline: 1px solid rgb(var(--auxiliar-dark-rgb));
  }
`;

export default TextField;
