/** @jsxImportSource theme-ui */

import { Parallax } from '@react-spring/parallax'
import Link from 'next/link'
import Layout from '../components/Layout'
import About from './about'
import Svg from '../components/svg'
import theme from '../style/theme'
import { ThemeProvider } from 'theme-ui'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/contact'

const IndexPage = () => (
<ThemeProvider theme={theme}>
  {/* <Layout title="Home | Next.js + TypeScript Example"> */}
  <Layout>
    <Parallax pages={5}>
    {/* <svg xmlns="http://www.w3.org/2000/svg" role="img" width="24" color="white">
      <use id="box" xlinkHref="/static/icons.svg#box" />
    </svg> */}
    {/* <h1>Hello Next.js 👋</h1>
    <h1 sx={{
        color: 'secondary',
      }}>123</h1> */}
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
</ThemeProvider>
)

export default IndexPage
