import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import styles from './Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}
const universalTitle = ' | Jaime Herzog\'s Personal Website'
const Layout = ({ children, title = 'Jaime Herzog\'s Personal Website' }: Props) => (
  <div className={styles.body}>
    <Head>
      <title>{title +  universalTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar/>
    </header>
    {children}
    <footer aria-label="Footer" className={styles.footer}>
      <hr />
      <span>Thanks for reading :)</span>
    </footer>
  </div>
)

export default Layout
