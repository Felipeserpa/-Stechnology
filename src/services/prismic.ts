import * as Prismic from '@prismicio/client';

const client = Prismic.createClient(
  `${import.meta.env.VITE_PRISMIC_REPOSITORY}`,
  {
    accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
  }
);

export default client;
