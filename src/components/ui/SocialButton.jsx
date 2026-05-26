import styles from './SocialButton.module.css'

const platformColors = {
  discord: 'var(--color-discord)',
  facebook: 'var(--color-facebook)',
  youtube: 'var(--color-youtube)',
  twitter: 'var(--color-twitter)',
}

export default function SocialButton({ platform, icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialBtn}
      aria-label={label}
      title={label}
    >
      <span
        className={styles.icon}
        style={{ backgroundColor: platformColors[platform] || 'var(--color-secondary)' }}
      >
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
    </a>
  )
}
