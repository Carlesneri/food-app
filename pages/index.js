import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mediterranean food</title>
        <meta name="description" content="Recipes, plans and everything about mediterranean food." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main />

      <Footer />

    </div>
  )
}
