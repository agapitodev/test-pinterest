import { ColorValuesMapper, SizeValuesMapper } from '@/app/_lib/types';

export const FONT_SIZE_VALUES: SizeValuesMapper = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
};

export const LINE_HEIGHT_VALUES: SizeValuesMapper = {
  xs: '1rem',
  sm: '1.25rem',
  base: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
  '3xl': '2.25rem',
  '4xl': '2.5rem',
};

export const COLOR_VALUES: ColorValuesMapper = {
  primary: 'rgb(var(--primary-rgb))',
  secondary: 'rgb(var(--secondary-rgb))',
  auxiliar: 'rgb(var(--auxiliar-rgb))',
  default: 'rgb(var(--foreground-rgb))',
};
