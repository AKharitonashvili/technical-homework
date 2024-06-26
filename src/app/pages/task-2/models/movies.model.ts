interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Movie {
  id: string;
  image?: Image;
  title: string;
  titleType: string;
  year: number;
  episode?: number;
  season?: number;
}
