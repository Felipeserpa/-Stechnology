import { getAboutMe } from '../../../helpers/prismic/posts';
import Loading from '../../components/Loading';
import Container from './styles';

export default function About() {
  const paragraph = getAboutMe();
  return (
    <Container>
      <section id="about" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Sobre Mim</h1>
          <div className="section-container">
            {paragraph ? (
              <>
                <article>
                  <p>Olá, eu sou o Samuel.</p>
                  <p>{paragraph?.about_me_text}</p>
                </article>
                <picture data-aos="fade-up">
                  <img src="/avatar.webp" alt="avatar.webp" />
                </picture>
              </>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
