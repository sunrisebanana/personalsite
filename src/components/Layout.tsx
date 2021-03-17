import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import styles from './Layout.module.css'
import { Container, } from 'semantic-ui-react'
import MobileNavbar from './MobileNavbar'

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
      <meta name="viewport" content="initial-scale=1.0, width=device-width minimum-scale=1" />
    </Head>
      <header>
        <Navbar/>
      </header>

    <div className="contentwrap">
      <div className="main"></div>
      <br/>
      {children}
    </div>
    <footer aria-label="Footer" className={styles.footer}>

      <MobileNavbar/>
    </footer>
  </div>
)

export default Layout
