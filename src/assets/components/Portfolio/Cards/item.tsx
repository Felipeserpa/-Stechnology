import { projectInterface } from "../../../../helpers/prismic/types/portfolio";

export function Item({
  slug,
  title,
  description,
  site,
  github,
  thumbnail,
}: projectInterface) {
  let msgGithub;
  !github ? (msgGithub = "") : (msgGithub = "Projeto no Github");

  return (
    <div className="card" data-aos="fade-up">
      <div className="card-description">
        <a href={slug}></a>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="link">
          <a href={site} target="_blank">
            Deploy
          </a>
        </div>
        <div className="link">
          <a href={github} target="_blank">
            {msgGithub}
          </a>
        </div>
      </div>
      <div className="card-image">
        <a href={site} target="_blank">
          <img src={thumbnail} alt={thumbnail} />
        </a>
      </div>
    </div>
  );
}
