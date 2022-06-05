import styles from './Layout.module.css'
import {
  Meta,
  Footer,
  Navbar,
} from '../components'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
