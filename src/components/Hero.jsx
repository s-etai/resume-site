import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.name}>Elliott Tai</h1>
        <p className={styles.tagline}>
          B.S. Computer Science, Washington State University | Expected May 2027 Graduation | 4.0 GPA
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnOutline}>Contact Me</a>
        </div>
      </div>
      <div className={styles.gradient} aria-hidden="true" />
    </section>
  )
}
