import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lawrence Hill Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.main}>
            <h1>Welcome to Andrew's Lawrence Hill Project!</h1>
            <img src="https://www.uoguelph.ca/arts/sites/default/files/styles/large/public/Lawrence-Hill-380.jpg?itok=JdSI90NJ" height="30%" width="30%"/>
            <br/>
            <Button variant="contained" color="primary">Hello world</Button>
        </main>

        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            Next.JS, Netlify & alee14.me
            </a>
        </footer>
    </div>
  )
}
