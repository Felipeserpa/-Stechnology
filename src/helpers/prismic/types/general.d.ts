export interface prismicText {
    type: string;
    text: string;
}

export interface prismicImage {
  alt?: string;
  url: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface prismicUrl {
    link_type?: string;
    url: string;
}