import Head from 'next/head'
import Main from '../components/Main'
// import styles from '../styles/Home.module.css'

export default function Home() {

  // fetch('/api/recipesByName')
  // .then(res => res.json())
  // .then(recipes => console.log(recipes))

  return (
    <div>
      <Head>
        <title>Mediterranean food</title>
        <meta name="description" content="Recipes, plans and everything about mediterranean food." />
      </Head>

      <Main />

    </div>
  )
}
