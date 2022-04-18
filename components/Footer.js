import Link from 'next/link'
import Styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>Copyright &copy; DJ Events 2022</p>
      <Link href='/about'>About this project</Link>
    </footer>
  )
}
