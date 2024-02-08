export type SizeValuesMapper = {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
};

export type SizeType = keyof SizeValuesMapper;

export type ColorValuesMapper = {
  primary: string;
  secondary: string;
  auxiliar: string;
  default: string;
};

export type ColorType = keyof ColorValuesMapper;
