import { Card } from "../components"
import Layout from "../layouts"
import styles from "../styles/About.module.css"

export default function About() {
  return (
    <Layout>
      <div className={styles.grid}>
        <Card />
      </div>
    </Layout>
  )
}