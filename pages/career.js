import Head from 'next/head'
import Container from '@material-ui/core/Container';
import styles from '../styles/Page.module.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

export default function Career() {
  return (
    <Container>
      <Head>
        <title>Lawrence Hill Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <h1>Career</h1>
            <Link href="/">
                <Button variant="contained" color="primary">Back to home</Button>
            </Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>

        <footer className={styles.footer}>
            <p>
            Powered by{' '}
            Next.JS & Netlify. {' '}
            <a href="https://alee14.me" target="_blank">Website by Andrew Lee</a></p>
        </footer>
    </Container>
  )
}
