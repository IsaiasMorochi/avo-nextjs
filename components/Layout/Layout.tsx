import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
    {/* <style jsx>{`
        #content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          background-color: yellow;
        }
      `}</style> */}
  </>
)

export default Layout
