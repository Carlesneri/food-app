// import { useRouter } from 'next/router'
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
			{recipe && <Recipe recipe={recipe} />}
		</>
	)
}

export const getServerSideProps = async function ({ query }) {
	const { name } = query
	const splittedName = name.split("-")
	const ID = splittedName[splittedName.length - 1]

	try {
		const recipe = getRecipesByID(ID)

		return {
			props: {
				recipe,
			},
		}
	} catch {
		console.error("No recipe found")

		return {
			props: {
				recipe: null,
			},
		}
	}
}
