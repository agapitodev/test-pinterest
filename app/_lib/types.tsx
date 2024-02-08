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

export type RawImage = {
  id: string;
  is_album: boolean;
  link: string;
  type: string;
  datetime: number;
  images: [
    {
      id: string;
      link: string;
      type: string;
      datetime: number;
    },
  ];
};

export type ResponseImages = {
  data: RawImage[];
};

export type ResponseImagesByTag = {
  data: {
    items: RawImage[];
  };
};

export type Image = {
  id: string;
  link: string;
  type: string;
  datetime: number;
};
