import Head from "next/head"
import Main from "../components/Main"
import { SearchIngredient } from "../components/SearchIngredient"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Mediterranean food</title>
				<meta
					name="description"
					content="Recipes, plans and everything about mediterranean food."
				/>
			</Head>

			<SearchIngredient />
			<Main />
		</div>
	)
}
