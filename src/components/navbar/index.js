import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/about">
        <div>

          about
          <i className="uil uil-arrow-right"></i>
        </div>
      </Link>
    </nav>
  )
};