import Head from 'next/head'
import Styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './showcase'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      <Showcase />
      <div className={Styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest partner',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm,events'
}
