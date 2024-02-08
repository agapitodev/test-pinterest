'use client';

import styled from 'styled-components';
import { COLOR_VALUES } from '@/app/_lib/constants';
import { ColorType } from '@/app/_lib/types';

interface TextFieldProps {
  $color?: ColorType;
}

const TextField = styled.input<TextFieldProps>`
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: var(--small-border-radius);
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
  background: rgb(var(--background-dark-rgb));
  &::placeholder {
    color: ${(props) =>
      props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
  }
  &:focus {
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${(props) =>
      props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
  }
`;

export default TextField;
