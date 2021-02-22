import Head from 'next/head'
import Container from '@material-ui/core/Container';
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Lawrence Hill Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <div className={styles.titlelawrence}>
                <h1>Lawrence Hill</h1>
                <img src="https://www.uoguelph.ca/arts/sites/default/files/styles/large/public/Lawrence-Hill-380.jpg?itok=JdSI90NJ" height="80%" width="80%"/>
                <h2>Made by Andrew Lee</h2>
            </div>
            <img src="/Alee.svg" height="10%" width="10%"/>
            <br/>
            <Link href="/childhood-adulthood">
            <Button variant="contained" color="primary">Childhood and young adulthood</Button>
            </Link>
            <br/>
            <Link href="/career">
            <Button variant="contained" color="primary">Career</Button>
            </Link>
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
