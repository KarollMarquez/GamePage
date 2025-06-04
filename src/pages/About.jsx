import aboutHero from '../assets/about-hero.png';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css'; // Importar el CSS directamente

export default function About() {

    return (
        <div className={styles.aboutContainer}>
        <section className={styles.aboutContent}>
            <div className={styles.imagePreview}>
            <img src={aboutHero} alt="Paisaje del juego" />
            </div>
            <div className={styles.textSection}>
            <h1 className={styles.title}>Historia del juego</h1>
            <p>
                En un mundo devastado por la contaminación y desastres ecológicos, la megacorporación Royal Dutch Carapace ha causado un colapso ecológico global. Las ciudades han quedado en ruinas y la supervivencia de la humanidad pende de un hilo.
            </p>
            <Link to="/" className={styles.ctaButton}>Volver al inicio</Link>
            </div>
        </section>
        </div>
    );
}
