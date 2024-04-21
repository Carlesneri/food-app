import { useEffect, useState } from "react"
import styles from "../styles/Footer.module.css"

export default function Footer() {
	const [date, setDate] = useState(null)

	useEffect(() => {
		setDate(new Date().toLocaleDateString())
	}, [])

	return (
		<footer className={styles.footer}>
			Food app
			{date && <span>{date}</span>}
		</footer>
	)
}
