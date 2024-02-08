'use client';

import styled from 'styled-components';
import { ColorType } from '@/app/_lib/types';
import { COLOR_VALUES } from '@/app/_lib/constants';
import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'contained' | 'outlined';
  $color?: ColorType;
  href?: string;
}

const BaseButton = styled.button<ButtonProps>`
  text-align: center;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  border-radius: var(--small-border-radius);
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
`;

const ContainedButton = styled(BaseButton)`
  background: ${(props) =>
    props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
  border-color: ${(props) =>
    props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
  color: #fff;
`;

const OutlinedButton = styled(BaseButton)`
  background: #fff;
  color: ${(props) =>
    props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
`;

export default function Button(props: Readonly<ButtonProps>) {
  const { $variant = 'contained' } = props;
  if ($variant === 'contained') {
    return <ContainedButton {...props} as={props.href ? Link : 'button'} />;
  }
  return <OutlinedButton {...props} as={props.href ? Link : 'button'} />;
}
