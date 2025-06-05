import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.png';
import playerImg from '../assets/player.png';
import enemyImg from '../assets/enemy.png';
import styles from '../styles/Home.module.css'; // Importar el CSS directamente

export default function Home() {
  const sectionRef = useRef(null);
  const [showSection, setShowSection] = useState(false);
  const charactersRef = useRef(null);
  const developersRef = useRef(null);
  const [showCharacters, setShowCharacters] = useState(false);
  const [showDevelopers, setShowDevelopers] = useState(false);


  // Animación cuando se hace scroll hasta la sección
  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { // 👈 depuración
      if (entry.isIntersecting) {
        setShowSection(true);
      }
    },
    { threshold: 0.1 } // antes era 0.3
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
}, []);


useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) setShowSection(true);
  }, { threshold: 0.1 });

  const charactersObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) setShowCharacters(true);
  }, { threshold: 0.1 });

  const developersObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) setShowDevelopers(true);
  }, { threshold: 0.1 });

  if (sectionRef.current) observer.observe(sectionRef.current);
  if (charactersRef.current) charactersObserver.observe(charactersRef.current);
  if (developersRef.current) developersObserver.observe(developersRef.current);

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
    if (charactersRef.current) charactersObserver.unobserve(charactersRef.current);
    if (developersRef.current) developersObserver.unobserve(developersRef.current);
  };
}, []);


  const handleStartClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Purge The Poison</h1>
        <button className={styles.btnStart} onClick={handleStartClick}>Start</button>
      </header>

      <section ref={sectionRef} className={`${styles.sectionContent} ${showSection ? styles.slideIn : ''}`}>
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

          <div ref={charactersRef}
  className={`${styles.characters} ${showCharacters ? styles.slideIn : ''}`}>
            <h2 className={styles.subtitle}>Personajes</h2>
            <div className={styles.characterCards}>
              <article>
                <div className={styles.card}>
                  <img src={playerImg} alt="Personaje Luca" />
                </div>
                <div className={styles.cardInfo}>
                  <h3>Luca</h3>
                  <p>Un exterminador de una megacorporación responsable del colapso ecológico global.</p>
                </div>
              </article>
              <article>
                <div className={`${styles.card} ${styles.enemy}`}>
                  <img src={enemyImg} alt="Enemigo" />
                </div>
                <div className={styles.cardInfo}>
                  <h3>Enemigo</h3>
                  <p>Criatura mutante enloquecida por la contaminación dinámica.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section ref={developersRef}
  className={`${styles.developers} ${showDevelopers ? styles.slideIn : ''}`}>
        <h1 className={styles.subtitle}>Desarrolladores</h1>
        <div className={`${styles.content} ${styles.developerList} flex flex-row justify-center items-center`}>
          <div className={styles.textContent}>
            <p>
              El juego fue desarrollado por un grupo de estudiantes de la Universidad del Norte,
              como parte de su proyecto final en Programación Orientada a Objetos y Estructura de Datos I. Fue desarrollado usando Godot Engine y GDScript.
            </p>
            <a href="https://github.com/Jdiazz27/NeoFuture-Industries" target="_blank" rel="github" className={styles.btnMore}>Ver en GitHub</a>
          </div>
          <div className="imageWrapper">
            <img
              src="https://programbling.com/content/images/2023/06/Godot-Banner.jpg"
              alt="Godot Engine"
            />
          </div>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <p>© 2023 Purge The Poison. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}