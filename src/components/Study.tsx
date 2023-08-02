import Divider from "elements/divider"
import Inner from "elements/Inner"
import Content from "elements/content"
import Svg from "./Svg"
import { UpDown, UpDownWide } from "style/animation"
import StudyMDX from "../sections/study.mdx"

const Study = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    {/* 背景設定 */}
    <Divider
      bg="divider_y"
      clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    {/* //背景の動く画像設定 */}
    <Divider speed={0.1} offset={offset} factor={factor}>
    <UpDown>
        <Svg icon="heart-regular" hiddenMobile width={6} color="icon_blue" left="50%" top="75%" />
        <Svg icon="heart-rough" hiddenMobile width={8} color="icon_darkest" left="70%" top="20%" />
        <Svg icon="heart-rough" width={8} stroke color="icon_darkest" left="25%" top="5%" />
        <Svg icon="heart-solid" hiddenMobile width={24} color="icon_rose" left="80%" top="80%" />

      </UpDown>
      <UpDownWide>
        <Svg icon="star-of-life-solid" hiddenMobile width={16} stroke color="icon_purple" left="5%" top="80%" />
        <Svg icon="star-of-life-solid" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="heart-regular" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="heart-regular" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="heart-regular" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg icon="snowflake" width={8} stroke color="icon_darkest" left="80%" top="70%" />
    </Divider>
    {/* コンテンツ */}
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner id="study">
      <div
          sx={{
            display: `grid`,
            gridGap: [2, 2, 2, 3],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h3: { gridColumn: `-1/1`, fontSize: ['s', 'ms', 'm']},
          }}
        >
          <div sx={{color:"text", gridColumn:"1"}}><StudyMDX /></div>
          <div sx={{
            gridColumn: [`-2/2`],
            mt:"5",
            display: "block",
            margin:"auto"
            }}>
              <img src="/static/clock.png" width="350" height="350" />
          </div>
        </div>
      </Inner>
    </Content>
  </div>
)

export default Study
