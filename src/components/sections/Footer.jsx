import { SocialButton } from '../ui'
import { socialLinks } from '../../data/socials'
import logo from '../../assets/ui/ninety_six_logo.png'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.brand}>  &copy; {new Date().getFullYear()} NinetySix Studios. All rights reserved</p>
         
        </div>
        <img src={logo} alt="NinetySix Logo" className={styles.logo} />
      </div>
    </footer>
  )
}
