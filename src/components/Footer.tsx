/** @jsxImportSource theme-ui */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import GitHub from "../../static/github.svg"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode<"light" | "dark">()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={() => {
          const next = isDark ? `light` : `dark`
          setColorMode(next)
        }}
        type="button"
        data-testid="color-mode-toggle"
        aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >

        {` `}

      </Flex>
    </Box>
  )
}

export default Footer
