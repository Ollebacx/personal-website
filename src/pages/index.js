import Layout from '../layouts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        writting<br />
        <span className={styles.code}>code</span> <br />
        for humans
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

    </Layout>
  )
}
