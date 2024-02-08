import { expect, test } from 'vitest';
import ImagesApi from '@/services/ImagesApi';

test('Get only one instance of Api Class', () => {
  const imagesApi = ImagesApi.getInstance();
  const imagesApiSecond = ImagesApi.getInstance();
  expect(imagesApi).toStrictEqual(imagesApiSecond);
});
