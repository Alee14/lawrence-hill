import Head from 'next/head'
import Container from '@material-ui/core/Container';
import styles from '../styles/Page.module.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

export default function ChildhoodAdulthood() {
  return (
    <Container>
      <Head>
        <title>Lawrence Hill Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
          <h1>Childhood & Young Adulthood</h1>
            <Link href="/">
                <Button variant="contained" color="primary">Back to home</Button>
            </Link>
          <p>Lawrence was born on January 1st, 1957 on Newmarket, Ontario. His father immigrated to Canada after he was married in 1953.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/NewmarketOTH.jpg" height="20%" width="20%"/>
          <p>His grandfather and great grandfather were university graduates and ministers of the African Methodist Episcopal Church.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/BostonMA_CharlesStreetAMEChurch.jpg" height="20%" width="20%"/>
          <p>His mother was a civil rights activist in D.C and she also came from a republican family.</p>
          <img src="http://static1.squarespace.com/static/584c0f01d2b8579f007d0ff0/5856097b893fc0af92a54a14/5b32eec370a6adcbb728d20d/1563299222926/Donna+%26+Lawrence+Hill.jpg?format=1500w" height="20%" width="20%"/>
          <p>Lawrence was influenced by his parent’s work by the humans rights movement.</p>
        </main>

        <footer className={styles.footer}>
            <p>
            Powered by{' '}
            React, Next.JS & Netlify. {' '}
            <a href="https://alee14.me" target="_blank">Website by Andrew Lee</a></p>
        </footer>
    </Container>
  )
}
