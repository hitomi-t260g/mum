import Divider from "../elements/divider"
import Inner from "../elements/Inner"
import Content from "../elements/content"
import Svg from "../components/svg"
import { UpDown, UpDownWide } from "../style/animation"

const Sample = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    {/* 背景設定 */}
    <Divider
      bg="gray"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" //背景色の塗りを斜めにしている
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <h1>about1</h1>
    {/* //背景の動く画像設定 */}
    <Divider speed={0.1} offset={offset} factor={factor}>
    <UpDown>
        <Svg icon="box" hiddenMobile width={6} color="blue" left="50%" top="75%" />
        <Svg icon="upDown" hiddenMobile width={8} color="black" left="70%" top="20%" />
        <Svg icon="triangle" width={8} stroke color="black" left="25%" top="5%" />
        <Svg icon="upDown" hiddenMobile width={24} color="orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="5%" top="80%" />
        <Svg icon="triangle" width={12} stroke color="white" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="white" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="black" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" hiddenMobile width={6} color="white" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="black" left="70%" top="60%" />
      <Svg icon="box" width={6} color="orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="black" left="20%" top="30%" />
      <Svg icon="hexa" width={8} stroke color="black" left="80%" top="70%" />
    </Divider>
    {/* コンテンツ */}
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1>about2</h1>
      </Inner>
    </Content>
  </div>
)

export default Sample
