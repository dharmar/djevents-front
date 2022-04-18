import Link from 'next/link'
import Styles from '@/styles/Header.module.css'

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <Link href='/'>
          <a>DJ Events</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}