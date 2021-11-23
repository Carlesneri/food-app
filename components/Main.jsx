import Card from "./Card"
import styles from '../styles/Main.module.css'

export default function Main() {
  return (
    <ul className={styles.main}>
      <li>
        <Card title="To get inspired" description="The most succulent Mediterranean-style recipes" image={'/recipes.jpg'} />
      </li>
      <li>
        <Card title="To get welthy" description="Dishes for diet plans" image={'/diet.jpg'} />
      </li>
      <li>
        <Card title="To get fresh" description="Salads and cold dishes" image={'/salads.jpg'} />
      </li>
      <li>
        <Card title="To share" description="Rice based recipes" image={'/rice.jpg'} />
      </li>
    </ul>
  )
}
