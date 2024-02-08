'use client';

import styled from 'styled-components';
import {
  COLOR_VALUES,
  FONT_SIZE_VALUES,
  LINE_HEIGHT_VALUES,
} from '@/app/_lib/constants';
import { SizeType, ColorType } from '@/app/_lib/types';

interface TypographyProps {
  $size?: SizeType;
  $color?: ColorType;
  $isBold?: boolean;
}

const Typography = styled.p<TypographyProps>`
  font-weight: ${(props) => (props.$isBold ? '600' : '400')};
  font-size: ${(props) =>
    props.$size ? FONT_SIZE_VALUES[props.$size] : '1rem'};
  line-height: ${(props) =>
    props.$size ? LINE_HEIGHT_VALUES[props.$size] : '1.5rem'};
  text-align: left;
  color: ${(props) =>
    props.$color ? COLOR_VALUES[props.$color] : 'rgb(var(--foreground-rgb))'};
`;

export default Typography;
