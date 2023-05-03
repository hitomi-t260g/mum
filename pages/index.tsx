/** @jsxImportSource theme-ui */

import { Parallax } from '@react-spring/parallax'
import Link from 'next/link'
import Layout from '../components/Layout'
import About from '../components/about'
import Svg from '../components/Svg'
import theme from '../style/theme'
import { ThemeProvider } from 'theme-ui'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/contact'
import StructuredManner from '../components/StructuredManner'

const IndexPage = () => (
<ThemeProvider theme={theme}>
  {/* <Layout title="Home | Next.js + TypeScript Example"> */}
  <Layout>
    <Parallax pages={11.5}>
    {/* <svg xmlns="http://www.w3.org/2000/svg" role="img" width="24" color="white">
      <use id="box" xlinkHref="/static/icons.svg#box" />
    </svg> */}
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={1.5} />
      <About offset={2.5} factor={2} />
      <StructuredManner offset={4.5} factor={2} />
      <About offset={6.5} factor={2} />
      <About offset={8.5} factor={2} />
      <Contact offset={10.5} factor={1} />
    </Parallax>
  </Layout>
</ThemeProvider>
)

export default IndexPage
