import Meta from '@/components/Meta'
import React from 'react'
import { Box } from '../Box'
import Footer from '../Footer'
import * as styles from './layout.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Box
        id="app"
        paddingBottom="xxxlarge"
        marginBottom="xxxlarge"
        className={styles.skewedContainer}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
