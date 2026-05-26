import { Hero, CallToAction, YouTubeGallery, Footer } from '../../components/sections'
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <main className={styles.landing}>
      <Hero />
      <CallToAction />
      <YouTubeGallery />
      <Footer />
    </main>
  )
}
