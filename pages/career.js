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
            <p>He wrote 10 books in fiction and non-fiction.</p>
            <img src="https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/vhYAAOSwuspY9qNg/$_27.JPG" width="20%" height="20%" />
            <p>In 2005 he won his first award which is a National Magazine Award for his article which is “Is Africa’s Pain Black America’s Burden?” and it’s published in The Walrus.</p>
            <img src="http://img.src.ca/2016/03/10/635x357/160310_fq8v8_rci-books_sn635.jpg" width="30%" height="30%" />
            <p>His novel in 2007, The Book Of Negroes brought his book attention to the public. That novel also won several awards, including The Rogers/Writers’ Trust Fiction Prize, both CBC Radio’s Canada Reads and Radio Canada’s Le Combat des Livres, and The Commonwealth Prize for Best Book.</p>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51WAj6VsbGL.jpg" width="20%" height="20%" />
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
