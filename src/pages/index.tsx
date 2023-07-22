

import { Parallax } from '@react-spring/parallax'
import Layout from 'components/Layout'
import About from 'components/about'
import theme from '../style/theme'
import { ThemeProvider } from 'theme-ui'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import Contact from 'components/contact'
import StructuredManner from 'components/StructuredManner'
import Task from 'components/Task'
import Study from 'components/Study'
import Thanks from 'components/Thanks'

const IndexPage = () => (
<ThemeProvider theme={theme}>
  <Layout>
    <Parallax pages={11.0}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={1.5} />
      <About offset={2.5} factor={1.5} />
      <StructuredManner offset={4.0} factor={1.5} />
      <Task offset={5.5} factor={1.5} />
      <Study offset={7.0} factor={1.5} />
      <Thanks offset={8.5} factor={1.5} />
      <Contact offset={10.0} factor={1} />
    </Parallax>
  </Layout>
</ThemeProvider>
)

export default IndexPage
