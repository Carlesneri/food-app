import { useRouter } from "next/router"
import Head from "next/head"
import Recipe from "../../components/Recipe"
import { getRandomRecipe } from "../api/randomRecipe"

export default function Tags({ recipe = null }) {
	const router = useRouter()
	const { tags } = router.query
	const titleTag = tags?.toUpperCase() || ""

	let content = `${tags[0].toUpperCase()}${tags.substr(1)} mediterranean recipe`

	recipe?.title && (content = `${content}: ${recipe.title}`)

	return (
		<>
			<Head>
				<title>{titleTag} | Nerifood</title>
				<meta name="description" content={content} />
			</Head>
			{recipe ? <Recipe recipe={recipe} /> : <h3>No recipe found</h3>}
		</>
	)
}

export const getServerSideProps = async function ({ query }) {
	const { tags } = query

	try {
		const recipe = await getRandomRecipe({
			tags: tags === "diet" ? "mediterranean" : tags,
		})

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
