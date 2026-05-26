import { SocialButton } from '../ui'
import { socialLinks } from '../../data/socials'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <div className={styles.socials}>
          {socialLinks.map((social) => (
            <SocialButton
              key={social.platform}
              platform={social.platform}
              icon={social.icon}
              label={social.label}
              href={social.href}
            />
          ))}
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
