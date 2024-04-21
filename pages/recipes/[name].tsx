import Head from "next/head"
import Recipe from "../../components/Recipe"
import { getRecipesByID } from "../api/recipesByID"

export default function RecipePage({ recipe = null }) {
	const titleTag = recipe?.title || ""
	let content = recipe?.summary?.split(". ")[0] || ""

	return (
		<>
			<Head>
				<title>{titleTag} | Mediterranean food</title>
				<meta name="description" content={content} />
			</Head>
			{recipe ? <Recipe recipe={recipe} /> : <h3>No recipe found</h3>}
		</>
	)
}

export const getServerSideProps = async function ({ params }) {
	const { name } = params

	const recipe = await getRecipesByID(name)

	return {
		props: {
			recipe,
		},
	}
}
