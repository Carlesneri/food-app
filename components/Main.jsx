import Card from "./Card"
import styles from '../styles/Main.module.css'
import Link from 'next/link'

export default function Main() {
  const cards = [
    {
      href: '/toGetInspired',
      title: "To get inspired",
      description: "The most succulent mediterranean dishes",
      image: '/recipes.jpg',
    },
    {
      href: '/tags/soup',
      title: "To get warm",
      description: "Creams and soups",
      image: '/soup.jpg',
    },
  ]

  return (
    <ul className={styles.main}>
      {cards.map((card, i) => {
        return (
          <li key={i}>
            <Link href={card.href}>
              <a>
                <Card title={card.title} description={card.description} image={card.image} tags={card.tags} />
              </a>
            </Link>
          </li>
        )
      })}
      {/* <li>
        <Link href="/toGetInspired">
          <a>
            <Card title="To get inspired" description="The most succulent mediterranean dishes" image={'/recipes.jpg'} />
          </a>
        </Link>
      </li>
      <li>
        <Card title="To get warm" description="Creams and soups" image={'/soup.jpg'} />
      </li>
      <li>
        <Card title="To get fresh" description="Salads and cold dishes" image={'/salads.jpg'} />
      </li>
      <li>
        <Card title="To get wealthy" description="Dishes for diet meal plans" image={'/diet.jpg'} />
      </li>
      <li>
        <Card title="To share" description="Rice based recipes" image={'/rice.jpg'} />
      </li>
      <li>
        <Card title="To get sweety" description="Tradicional mediterranean desserts" image={'/sweet.jpg'} />
      </li> */}
    </ul>
  )
}
