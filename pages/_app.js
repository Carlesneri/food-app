import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}


