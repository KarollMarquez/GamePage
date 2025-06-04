import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

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
    <div className="container">
      <header className="hero">
        <h1 className="title">Royal Dutch Carapace</h1>
        <button className="btn-start" onClick={handleStartClick}>Start</button>
      </header>

      <section ref={sectionRef} className={`section-content ${showSection ? 'slide-in' : 'hidden'}`}>
        <div className="about-section">
            <div className="content">
            <div className="image-wrapper">
                <img src="/about.png" alt="Gameplay" />
            </div>
            <div className="text-content">
                <h2 className="subtitle">Sobre el juego</h2>
                <p>
                Pure The Poison es un juego roguelike en 2D ambientado en un mundo devastado por la contaminación. El jugador encarna a Luca, un exterminador de una megacorporación responsable del colapso ecológico global, que debe enfrentar criaturas mutantes y máquinas enloquecidas por la contaminación dinámica. Un juego basado en sensiblería sobre la crisis ecológica, todo dentro de una experiencia desafiante y envolvente.
                </p>
                <Link to="/about" className="btn-more">Más</Link>
            </div>
            </div>

            <div className="characters">
            <h2 className="subtitle">Personajes</h2>
            <div className="character-cards">
                <div className="card">
                    <img src="/player.png" alt="Personaje Luca" />
                </div>
                <div className="card enemy">
                    <img src="/enemy.png" alt="Enemigo" />
                </div>
            </div>
            </div>
        </div>
    </section>
    </div>
  );
}