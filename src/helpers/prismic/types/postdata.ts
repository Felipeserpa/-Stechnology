import { PortfolioDocument } from './portfolio';

const postData = (data: PortfolioDocument) => {
  return {
    title: data?.title?.[0]?.text,
    description: data?.description?.[0]?.text,
    site: data?.site?.url,
    github: data?.github?.url,
    thumbnail: data?.thumbnail?.url,
  };
};
export default postData;
