import Link from 'next/link'
import Layout from '@/components/layout'
import styles from '@/styles/404.module.css'

export default function PageNotFound() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>404</h1>
        <h4>There is no any page</h4>
        <Link href='/'>Go Home</Link>
      </div>
    </Layout>
  )
}
