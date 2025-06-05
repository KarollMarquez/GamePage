import { useRef, useState, useEffect } from 'react';
import aboutHero from '../assets/about-hero.png';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import person from '../assets/person.png';
import protagonista from '../assets/protagonista.png';
import historia from '../assets/historia.png';
import jugabilidad from '../assets/jugabilidad.png';
import ambientacion from '../assets/Ambientacion.png';

export default function About() {
  // Referencias a cada sección que quieres animar
  const section1Ref = useRef(null);
  const misionRef = useRef(null);
  const cardsRef = useRef(null);

  // Estados para controlar si se ha hecho “show” de cada sección
  const [showSection1, setShowSection1] = useState(false);
  const [showMision, setShowMision] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    // Función genérica que recibe un ref y un setter para el estado
    const createObserver = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target); // dejar de observar después de animar
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    createObserver(section1Ref, setShowSection1);
    createObserver(misionRef, setShowMision);
    createObserver(cardsRef, setShowCards);

    // Cleanup al desmontar (opcional porque ya hacemos unobserve)
    return () => {
      if (section1Ref.current) createObserver(section1Ref, setShowSection1)?.disconnect();
      if (misionRef.current) createObserver(misionRef, setShowMision)?.disconnect();
      if (cardsRef.current) createObserver(cardsRef, setShowCards)?.disconnect();
    };
  }, []);

  return (
    <div className={styles.aboutContainer}>
      {/* SECCIÓN 1: Contexto del juego */}
      <section
        ref={section1Ref}
        className={`${styles.aboutContent} ${
          showSection1 ? styles.slideInUp : styles.hidden
        }`}
      >
        <div className={styles.imagePreview}>
          <img src={aboutHero} alt="Paisaje del juego" />
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Contexto del juego</h1>
          <p>
            En un mundo arrasado por la contaminación, una catástrofe ecológica global ha dejado la civilización al borde de la extinción. Ciudades en ruinas, desiertos tóxicos y monstruos mutantes son ahora la norma. ¿Podrás sobrevivir y revelar la verdad?
          </p>
          <Link to="/" className={styles.ctaButton}>
            Volver al inicio
          </Link>
        </div>
      </section>

      {/* SECCIÓN 2: Tu Misión */}
      <section
        ref={misionRef}
        className={`${styles.misionSection} ${
          showMision ? styles.fadeInLeft : styles.hidden
        }`}
      >
        <div>
          <h2 className={styles.misionTitle}>Tu Misión</h2>
          <p className={styles.misionDescription}>
            Tu misión es atravesar estos niveles caóticos generados de forma aleatoria, enfrentar a los Caparazones y otros engendros de la contaminación, recuperar fragmentos de la verdad y destruir las fuentes activas de polución. Cada habitación representa un reto ambiental distinto, y tus armas y habilidades serán tecnologías verdes y conocimientos adquiridos antes del colapso.
          </p>
        </div>
        <div>
          <img src={person} alt="Personaje del juego" />
        </div>
      </section>

      {/* SECCIÓN 3: Cards de Historia, Protagonista, Jugabilidad, Ambientación */}
      <section
        ref={cardsRef}
        className={`${styles.aboutContent2} ${styles.aboutContent} ${
          showCards ? styles.fadeInUp : styles.hidden
        }`}
      >
        <div className={styles.card2}>
          <div className={styles.imageData}>
            <img src={historia} alt="Historia" />
          </div>
          <div>
            <p className={styles.title}>Historia</p>
            <p className={styles.description}>
              Tras un colapso ecológico global, el mundo quedó en ruinas. La humanidad sobrevive entre desechos y monstruos mutantes. Tu misión: acabar con la fuente de la contaminación.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.imageData}>
            <img src={protagonista} alt="Personaje del juego" />
          </div>
          <div>
            <p className={styles.title}>Protagonista</p>
            <p className={styles.description}>
              Eres Luca, un ex trabajador de la megacorporación culpable del desastre. Armado con tecnología verde, buscas redención enfrentando los horrores que ayudaste a crear.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.imageData}>
            <img src={jugabilidad} alt="Jugabilidad" />
          </div>
          <div>
            <p className={styles.title}>Jugabilidad</p>
            <p className={styles.description}>
              Explora mapas aleatorios en este roguelike 2D con vista cenital. Cada sala es un reto ambiental lleno de enemigos y decisiones estratégicas.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.imageData}>
            <img src={ambientacion} alt="Ambientación" />
          </div>
          <div>
            <p className={styles.title}>Ambientación</p>
            <p className={styles.description}>
              Enfrenta a los Caparazones: criaturas deformadas por tóxicos y corrupción. Sobrevive en un mundo dominado por desechos, fábricas abandonadas y caos biológico.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}