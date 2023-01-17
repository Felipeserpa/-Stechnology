import {
  useAllPrismicDocumentsByType,
  useSinglePrismicDocument,
} from '@prismicio/react';

// Importa o paragrafo sobre mim do Prismic

export const getAboutMe = () => {
  const [document] = useSinglePrismicDocument('about_me');
  if (document?.data == null) return null;
  const data = document?.data;
  return data;
};

// Importa os projetos do Prismic

export const getProject = () => {
  const [document] = useAllPrismicDocumentsByType('portfolio', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });

  const projects = document?.map((project) => ({
    slug: project.uid,
    title: project.data.title[0].text,
    description: project.data.description[0].text,
    site: project.data.site.url,
    github: project.data.github.url,
    thumbnail: project.data.thumbnail.url,
  }));
  return projects;
};
