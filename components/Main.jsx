import Card from "./Card"
import styles from "../styles/Main.module.css"
import Link from "next/link"
import cards from "../store/mainCards"

export default function Main() {
	return (
		<ul className={styles.main}>
			{cards.map((card, i) => {
				return (
					<li key={i}>
						<Link href={card.href} passHref>
							<Card
								title={card.title}
								description={card.description}
								image={card.image}
								tags={card.tags}
							/>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
