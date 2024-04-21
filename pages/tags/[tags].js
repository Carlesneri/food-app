import { useRouter } from "next/router"
import Head from "next/head"
import Recipe from "../../components/Recipe"

export default function Tags({ recipe = null }) {
	const router = useRouter()
	const { tags } = router.query
	const titleTag = tags?.toUpperCase() || ""

	let content = `${tags[0].toUpperCase()}${tags.substr(1)} mediterranean recipe`

	recipe?.title && (content = `${content}: ${recipe.title}`)

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

export const getServerSideProps = async function ({ query, req }) {
	const { tags } = query
	const { host } = req.headers

	try {
		const URL = `${host}/api/randomRecipe?tags=mediterranean,${tags}`

		const res = await fetch(URL)
		const { recipe } = await res.json()

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
