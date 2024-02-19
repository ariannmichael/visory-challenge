import { Image } from "./image.model";

export interface Event {
  name: string,
  type: string,
  id: string,
  test: boolean,
  url: string,
  locale: string,
  pleaseNote: string,
  images: Image[],
  
}