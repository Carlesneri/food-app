// import { useRouter } from 'next/router'
import Head from 'next/head'
import Recipe from '../../components/Recipe'

export default function RecipePage({ recipe = null }) {

  const titleTag = recipe?.title || ''

  let content = recipe?.summary?.split('. ')[0] || ''

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

export const getServerSideProps = async function(context) {
  const { name } = context.query 
  const splittedName = name.split('-')
  const ID = splittedName[splittedName.length - 1]
  console.log({ ID })
  

  const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.PRODUCTION_HOST


  try {
    const URL = `${HOST}/api/recipesByID?ID=${ID}`

    console.log({ URL })
    
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