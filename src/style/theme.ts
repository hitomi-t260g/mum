import { merge, ThemeUIStyleObject } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"
// import{borderWidths, breakpoints, baseColors ,colors, fonts,fontSizes} from "./themeBase"

declare module "theme-ui" {
  interface Theme {
    footer?: ThemeUIStyleObject
    texts?: ThemeUIStyleObject
  }
}

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `light`,
  },
  // fontSizes: [`0.875rem`, `1rem`, `1.25rem`, `1.5rem`, `1.875rem`, `2.25rem`, `3rem`, `4rem`, `4.5rem`], //gatsby-plugin-theme-uiで指定しているフォントを足した
  fontSizes: {
    xxs: `0.875rem`, //0
    xs: `1rem`, //1
    s: `1.25rem`, //2
    ms: `1.5rem`, //3
    m: `1.875rem`, //4
    ml: `2.25rem`, //5
    l: `3rem`, //6
    xl: `4rem`, //7
    xxl: `4.5rem` //8
  },
  colors: {
    primary: tailwind.colors.orange[3],
    secondary: tailwind.colors.indigo[6],
    text: tailwind.colors.gray[3],
    heading: tailwind.colors.white,
    background: `#141821`,
    background_p: `#FFBFA9`,
    divider: tailwind.colors.gray[8],
    divider_y: `#FBFFB1`,
    textMuted: tailwind.colors.gray[4],
    icon_brightest: tailwind.colors.white,
    icon_darker: tailwind.colors.gray[6],
    icon_darkest: tailwind.colors.gray[7],
    icon_red: tailwind.colors.red[6],
    icon_blue: tailwind.colors.blue[3],
    icon_orange: tailwind.colors.orange[3],
    icon_yellow: tailwind.colors.yellow[5],
    icon_pink: tailwind.colors.pink[5],
    icon_light_pink: tailwind.colors.pink[4],
    icon_rose: tailwind.colors.rose[3],
    icon_purple: tailwind.colors.purple[6],
    icon_green: tailwind.colors.lime[3],
    modes: {
      light: {
        text: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        primary: tailwind.colors.orange[7],
        background: tailwind.colors.gray[1],
        divider: tailwind.colors.gray[2],
        textMuted: tailwind.colors.gray[6],
        icon_brightest: tailwind.colors.gray[2],
        icon_darker: tailwind.colors.gray[4],
        icon_darkest: tailwind.colors.gray[6],
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: ['xxs', 'xs', 's'],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
  quote: {
      marginLeft: 0,
      p: {
        fontSize: ['s', 'ms'],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: ['ml', 'l', 'xl'],
      mt: 2,
      mb: 3,
      textShadow: `#FFEBB4 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: ['m', 'ml', 'l'],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: ['ms', 'm', 'ml'],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: ['s', 'ms', 'm'],
      color: `heading`,
    },
    h5: {
      fontSize: ['xs', 's', 'ms'],
      color: `heading`,
    },
    h6: {
      fontSize: 'xs',
      mb: 2,
      color: `heading`,
    },
    ul:{
      fontSize: ['xxs', 'xs', 's'],
      listStyle:"none",
      paddingLeft:"0",
    },
    li:{
      listStyle:"none",
      paddingLeft:"0",
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `textMuted`,
    px: [2, 3],
    py: [3, 4],
  },
  texts: {
    bigger: {
      p: {
        fontSize: ['xxs', 'xs', 's'],
      },
      h1: {
        fontSize: ['ml', 'l', 'xl'],
      },
      h2: {
        fontSize: ['m', 'ml', 'l'],
      }
    },
  },
  // }
})

export default theme
