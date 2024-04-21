import Head from "next/head"
import Recipe from "../components/Recipe"
import { getRandomRecipe } from "./api/randomRecipe"

export default function ToGetInspired({ recipe }) {
	return (
		<>
			<Head>
				<title>To get inspired | Mediterranean food</title>
				<meta
					name="description"
					content="Get inspired with a suculent mediterranean recipe."
				/>
			</Head>
			{recipe && <Recipe recipe={recipe} />}
		</>
	)
}

export const getServerSideProps = async function () {
	const recipe = await getRandomRecipe({ tags: "mediterranean" })

	return {
		props: {
			recipe,
		},
	}
}
