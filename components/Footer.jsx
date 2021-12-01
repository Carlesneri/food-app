import styles from '../styles/Footer.module.css'

export default function Footer() {
  const year = new Date().toLocaleDateString()
  return (
    <footer className={styles.footer}>
      Food app <span>{year}</span>
    </footer>
  )
}
