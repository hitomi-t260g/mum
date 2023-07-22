
import Divider from "elements/divider"
import Inner from "elements/Inner"
import Content from "elements/content"
import Svg from "./Svg"
import { UpDown, UpDownWide } from "style/animation"
import IntroMdx from "../sections/intro.mdx"
import { Button, useColorMode } from "theme-ui"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`
  return(
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="star-of-life-solid" hiddenMobile width={56} stroke color="icon_pink" left="10%" top="20%" />
        <Svg icon="heart-regular" width={48}  color="icon_red" left="60%" top="70%" />
        <Svg icon="star-of-life-solid" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="snowflake" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <Svg icon="heart-regular" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <Svg icon="heart-regular" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Svg icon="heart-regular" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="star-of-life-solid" hiddenMobile width={8} stroke color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="star-of-life-solid" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg icon="star-of-life-solid" hiddenMobile width={24} stroke color="icon_darker" left="40%" top="80%" />
      <Svg icon="heart-rough" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="circle" width={64} color="icon_orange" left="95%" top="5%" />
      <Svg icon="heart-solid" hiddenMobile width={64} color="icon_rose" left="5%" top="90%" />
      <Svg icon="heart-solid" width={6} color="icon_darkest" left="10%" top="2%" />
      <Svg icon="heart-regular" width={12} stroke color="icon_darkest" left="40%" top="30%" />
      <Svg icon="heart-rough" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <Svg icon="heart-rough" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>

    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>

      <Inner>

        <IntroMdx/>
        <Button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, my: 4, fontSizes:`xxs` }}
        onClick={() => {
          const next = isDark ? `light` : `dark`
          setColorMode(next)
        }}
        type="button"
        data-testid="color-mode-toggle"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        {isDark ? `Change to light mode` : `Change to dark mode`}
      </Button>
      </Inner>
    </Content>
  </div>
  )
      }

export default Hero
