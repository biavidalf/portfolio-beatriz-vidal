export interface AboutPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface HomeContent {
  aboutPhotos: AboutPhoto[];
}
