import styles from './Card.module.css'

export default function Card() {
  return (
    <div>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h2>Documentation &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </div>
  )
}