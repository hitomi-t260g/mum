import Divider from "elements/divider"
import Inner from "elements/Inner"
import Content from "elements/content"
import Svg from "./Svg"
import { UpDown, UpDownWide } from "style/animation"
import TaskMDX from "../sections/task.mdx"

const Task = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    {/* 背景設定 */}
    <Divider
      bg="background_p"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
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
      <Inner id="task">

      <div
          sx={{
            display: `grid`,
            gridGap: [2, 2, 2, 3],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            // h3: { gridColumn: `-1/1`,},
            gridColumn: [`-2/2`],
          }}
        >
          <div sx={{
            // gridColumn: [`-1/1`],
            mt:"5",
            display: "block",
            margin:"auto",
            padding:"1em",
            }}>
              <img src="/static/schedule.png" width="300" height="300" />
              <p style={{fontSize:"xs", fontWeight:"bold"}}>カレンダーの凡例</p>
              <ul style={{
                listStyle:"none",
                paddingLeft:"0",}}>
                <li>紫：当日必須、移動不可のタスク</li>
                <li>黄色：移動可能</li>
                <li>青：個人作業でなく移動不可の予定</li>
              </ul>
          </div>
          <div sx={{gridColumn:"-2/2", h3:{ fontSize: ['s', 'ms', 'm']}}}>
            <TaskMDX />
          </div>
        </div>
      </Inner>


    </Content>
  </div>
)

export default Task
