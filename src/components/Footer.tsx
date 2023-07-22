
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"
import GitHub from "../../static/github.svg"

const Footer = () => {


  return (
    <Box as="footer" variant="footer">

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
