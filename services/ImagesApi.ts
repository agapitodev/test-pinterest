import {
  RawImage,
  Image,
  ResponseImages,
  ResponseImagesByTag,
} from '@/app/_lib/types';
import HttpClient from './HttpClient';

class ImagesApi extends HttpClient {
  private static classInstance?: ImagesApi;

  private constructor() {
    super('https://api.imgur.com/3');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ImagesApi();
    }

    return this.classInstance;
  }

  public getImages = async (page: number): Promise<Image[]> => {
    const response = await this.instance.get<ResponseImages>(
      `/gallery/hot/viral/day/${page}?showViral=true&mature=false&album_previews=false`,
    );
    const rawData = response.data;
    return this.mapRawDataToImages(rawData);
  };

  public getImagesByTag = async (tag: string): Promise<Image[]> => {
    const response = await this.instance.get<ResponseImagesByTag>(
      `/gallery/t/${tag}/viral/day/1`,
    );
    const rawData = response.data.items;
    return this.mapRawDataToImages(rawData);
  };

  private mapRawDataToImages(rawData: RawImage[]): Image[] {
    const images: Image[] = rawData.map((image) => {
      return {
        id: image.is_album ? image.images[0].id : image.id,
        link: image.is_album ? image.images[0].link : image.link,
        type: image.is_album ? image.images[0].type : image.type,
        datetime: image.is_album ? image.images[0].datetime : image.datetime,
      };
    });
    return images.filter((image) => image.type !== 'video/mp4');
  }
}

export default ImagesApi;
