import styles from '../styles/Card.module.css'
import Image from 'next/image'
export default function Card({title, description, image}) {

  const alt = `${description} image`

  return (
    <div className={styles.card}>
      <Image src={image} layout='fill' objectFit='cover' alt={alt}/>
      <header className={styles.header}>
        {title}
      </header>
      <h2 className={styles.description}>
        {description}
      </h2>      
    </div>
  )
}
