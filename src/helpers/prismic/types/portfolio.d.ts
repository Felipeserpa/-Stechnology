import { PrismicImage, PrismicText, PrismicUrl } from './general';

export interface PortfolioDocument {
  title?: PrismicText[];
  description?: PrismicText[];
  site?: PrismicUrl;
  github?: PrismicUrl;
  thumbnail?: PrismicImage;
}

interface ProjectInterface {
  slug: string;
  title: string;
  description: string;
  site: string;
  github: string;
  thumbnail: string;
}

interface CardProps {
  projects: projectInterface[];
}
