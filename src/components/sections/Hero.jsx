import heroImg from '../../assets/Section-Images/Hero-Section.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <img src={heroImg} alt="Langit Lupa Coming Soon Banner" />
      </div>
    </section>
  )
}
