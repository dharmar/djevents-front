import Layout from '@/components/layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Layout>
      <h2>Home</h2>
      <Link href='/about'>About</Link>
    </Layout>
  )
}
