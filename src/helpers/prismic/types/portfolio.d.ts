import { prismicImage, prismicText, prismicUrl } from "./general";

export interface portfolioDocument {
  title?: prismicText[];
  description?: prismicText[];
  site?: prismicUrl;
  github?: prismicUrl;
  thumbnail?: prismicImage;
}

interface projectInterface {
  slug: string;
  title: string;
  description: string;
  site: string;
  github: string;
  thumbnail: string;
}

interface cardProps {
  projects: projectInterface[];
}
