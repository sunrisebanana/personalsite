import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from './Layout.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.body}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar/>
    </header>
    {children}
    <footer className={styles.footer}>
      <hr />
      <span>Thanks for reading :)</span>
    </footer>
  </div>
)

export default Layout
