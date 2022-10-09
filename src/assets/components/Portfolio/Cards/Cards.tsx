import { getProject } from "../../../../helpers/prismic/posts";
import { Item } from "./item";


export function Cards() {
  const data = getProject();
  return (
    <>
      {data?.map((cardProps) => (
        <Item
          key={cardProps.slug}
          slug="null"
          title={cardProps.title}
          description={cardProps.description}
          site={cardProps.site}
          github={cardProps.github}
          thumbnail={cardProps.thumbnail}
        />
      ))}
    </>
  );
}
