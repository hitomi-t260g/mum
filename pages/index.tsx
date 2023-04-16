/** @jsxImportSource theme-ui */

import { Parallax } from '@react-spring/parallax'
import Link from 'next/link'
import Layout from '../components/Layout'
import Sample from './sample'
import Svg from '../components/svg'
import theme from '../style/theme'
import { ThemeProvider } from 'theme-ui'
import Footer from '../components/Footer'

const IndexPage = () => (
<ThemeProvider theme={theme}>
  <Layout title="Home | Next.js + TypeScript Example">
    <Parallax pages={5}>
    {/* <svg xmlns="http://www.w3.org/2000/svg" role="img" width="24" color="white">
      <use id="box" xlinkHref="/static/icons.svg#box" />
    </svg> */}
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <h1 sx={{
        color: 'secondary',
      }}>123</h1>

    <Sample offset={1} factor={1} />
    </Parallax>
    <Footer />
  </Layout>
</ThemeProvider>
)

export default IndexPage
