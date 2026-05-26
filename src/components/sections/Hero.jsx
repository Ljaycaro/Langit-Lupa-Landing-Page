import { Button } from '../ui'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">
            <h1 className={styles.title}>Your Landing Page Title</h1>
            <p className={styles.subtitle}>
              A brief description of what you offer. Make it compelling and clear
              so visitors know exactly what this page is about.
            </p>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" href="#cta">
                Get Started
              </Button>
              <Button variant="outline-primary" size="lg" href="#videos">
                Learn More
              </Button>
            </div>
          </div>
          <div className={`col-lg-5 d-none d-lg-block ${styles.imageCol}`}>
            <div className={styles.heroImage}>
              {/* Add your image here: <img src={heroImg} alt="Hero" /> */}
              <span className={styles.placeholder}>Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
