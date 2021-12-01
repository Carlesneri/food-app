import { useRouter } from 'next/router'
import Head from 'next/head'
import Recipe from '../../components/Recipe'

export default function Tags({ recipe = null }) {

  const router = useRouter()
  const { tags } = router.query

  let content = `${tags[0].toUpperCase()}${tags.substr(1)} mediterranean recipe`

  recipe?.title && (content = `${content}: ${recipe.title}`)

  return (
    <>
      <Head>
        <title>{tags} | Mediterranean food</title>
        <meta name="description" content={content} />
      </Head>
      {recipe && <Recipe recipe={recipe} />}
    </>
  )
}

export const getServerSideProps = async function(context) {
  const { tags } = context.query 

  const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.PRODUCTION_HOST


  try {
    const URL = `${HOST}/api/randomRecipe?tags=mediterranean,${tags}`

    
    const res = await fetch(URL)
    const { recipe } = await res.json()

    return {
      props: {
        recipe
      }
    }
  } catch {
    console.error('No recipe found')
    return {
      props: {
        recipe: null
      }
    }
  }
}