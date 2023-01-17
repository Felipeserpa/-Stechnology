/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ProjectInterface } from '../../../helpers/prismic/types/portfolio';

export default function Item({
  slug,
  title,
  description,
  site,
  github,
  thumbnail,
}: ProjectInterface) {
  let msgGithub;
  !github ? (msgGithub = '') : (msgGithub = 'Projeto no Github');

  return (
    <div className="card" data-aos="fade-up">
      <div className="card-description">
        <a href={slug} />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="link">
          <a href={site} target="_blank" rel="noreferrer">
            Site
          </a>
        </div>
        <div className="link">
          <a href={github} target="_blank" rel="noreferrer">
            {msgGithub}
          </a>
        </div>
      </div>
      <div className="card-image">
        <a href={site} target="_blank" rel="noreferrer">
          <img src={thumbnail} alt={thumbnail} />
        </a>
      </div>
    </div>
  );
}
