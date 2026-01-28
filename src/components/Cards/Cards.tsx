import { CSSProperties } from 'react';

export default function Cards() {
  const images = [
    { src: 'Rb.jpg', alt: 'Barbeiro' },
    { src: 'GEL TOUR LOGO.png', alt: 'Logo Gel Tour' },
    { src: 'moove.jpg', alt: 'Logo Moove' },
    { src: 'Quantico.jpg', alt: 'Sinalização Quântico' },
    { src: 'segplan.png', alt: 'Segplan' },
    { src: 'marcelo adv.png', alt: 'Marcelo Advogados' },
  ];

  return (
    <section style={styles.container}>
      <div style={styles.imageContainer}>
        {images.map((image, index) => (
          <div key={index} style={styles.card}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              style={styles.image}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    width: '100%',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
  } as CSSProperties,

  imageContainer: {
    width: '100%',
    maxWidth: '1400px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '30px',
    alignItems: 'center',
  } as CSSProperties,

  card: {
    background: '#050505',
    borderRadius: '14px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  } as CSSProperties,

  image: {
    maxWidth: '100%',
    maxHeight: '80px',
    objectFit: 'contain',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease, transform 0.3s ease',
  } as CSSProperties,
};
