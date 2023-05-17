/** @jsxImportSource theme-ui */
// import {Link as Scroll} from 'react-scroll'

import Link from "next/link"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <>

  <Link
    href={`/#${link}`}
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      // boxShadow: `lg`,
      position: `relative`,
      // textDecoration: `none`,
      borderRadius: `lg`,
      px: 3,
      py: [1, 2],
      color: `white`,
      background: bg || `none`,
      textAlign:`center`,
      // borderBottom: `1px solid #FF8459`,
      // borderImage: `linear-gradient(to right, #FFBFA9 0%, #FF8459 100%)`,
      // borderImageSlice:1,
      // transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        // color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `lg`,
        background:`linear-gradient(to right, #FFBFA9 0%, #FF8459 100%)`,
        // border:`none`
      },
    }}
  >
    {/* <div
      sx={{
        opacity: 0.85,
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        p: {
          fontSize: 'xs',
          color: `white`,
          margin: 0,
        },
      }}
    >
      {children}
    </div> */}
    <div
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 2,
        pb: 2,
        fontSize: ['_1rem', 'ml'],
        fontWeight: `medium`,
        lineHeight: 1,
        p: {
          fontSize: 'm',
          color: `white`,
          margin: 0,
          fontWeight: `bold`,
        },
      }}
    >
      {title}
      {children}
    </div>
  </Link>
  </>
)

export default ProjectCard
