import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.png';
import playerImg from '../assets/player.png';
import enemyImg from '../assets/enemy.png';
import styles from '../styles/Home.module.css'; // Importar el CSS directamente

export default function Home() {
  const sectionRef = useRef(null);
  const [showSection, setShowSection] = useState(false);

  // Animación cuando se hace scroll hasta la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSection(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleStartClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Royal Dutch Carapace</h1>
        <button className={styles.btnStart} onClick={handleStartClick}>Start</button>
      </header>

      <section ref={sectionRef} className={`${styles.sectionContent} ${showSection ? styles.slideIn : styles.hidden}`}>
        <div className={styles.aboutSection}>
          <div className={styles.content}>
            <div className={`${styles.imageWrapper} flex justify-center align-center`}>
              <img src={aboutImg} alt="Gameplay" />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.subtitle}>Sobre el juego</h2>
              <p>
                Pure The Poison es un juego roguelike en 2D ambientado en un mundo devastado por la contaminación. El jugador encarna a Luca, un exterminador de una megacorporación responsable del colapso ecológico global, que debe enfrentar criaturas mutantes y máquinas enloquecidas por la contaminación dinámica. Un juego basado en sensiblería sobre la crisis ecológica, todo dentro de una experiencia desafiante y envolvente.
              </p>
              <Link to="/about" className={styles.btnMore}>Más</Link>
            </div>
          </div>

          <div className={styles.characters}>
            <h2 className={styles.subtitle}>Personajes</h2>
            <div className={styles.characterCards}>
              <div className={styles.card}>
                <img src={playerImg} alt="Personaje Luca" />
              </div>
              <div className={`${styles.card} ${styles.enemy}`}>
                <img src={enemyImg} alt="Enemigo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}