export interface PrismicText {
  type: string;
  text: string;
}

export interface PrismicImage {
  alt?: string;
  url: string;
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface PrismicUrl {
  link_type?: string;
  url: string;
}
