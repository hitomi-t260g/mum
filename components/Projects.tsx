/** @jsxImportSource theme-ui */

import Divider from "../elements/divider"
import Inner from "../elements/Inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../style/animation"
import ProjectsMDX from "../sections/projects.mdx"

const Projects = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`, zIndex:'-1' }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner  >
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important`, },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor} sx={{zIndex:'-1'}}>
      <UpDown>
        <Svg icon="heart-rough" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="star-of-life-solid" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg icon="heart-regular" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <Svg icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="heart-regular" hiddenMobile width={16} color="icon_rose" left="20%" top="90%" />
        <Svg icon="heart-solid" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <Svg icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <Svg icon="star-of-life-solid" hiddenMobile width={16} color="icon_teal" left="18%" top="75%" />
        <Svg icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <Svg icon="star-of-life-solid" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <Svg icon="heart-regular" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="heart-regular" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg icon="heart-solid" width={16} color="icon_red" left="75%" top="30%" />
      <Svg icon="heart-solid" width={8}  color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Projects
