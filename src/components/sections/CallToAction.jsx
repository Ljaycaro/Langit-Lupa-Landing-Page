import { Button } from '../ui'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section id="cta" className={styles.cta}>
      <div className="container text-center">
        <h2 className={styles.heading}>Ready to Get Started?</h2>
        <p className={styles.description}>
          Join our community and be part of something amazing. Click below to
          take the first step.
        </p>
        <Button variant="primary" size="lg">
          Join Now
        </Button>
      </div>
    </section>
  )
}
