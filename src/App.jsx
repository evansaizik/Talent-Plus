import Header from "./components/Header"
import Main from "./components/Main"
import { Box, Text, Heading } from "@chakra-ui/react"
import Affiliates from "./components/Affiliates"
import Course from "./components/courses"

Text.defaultProps, Heading.defaultProps = {
  fontFamily: 'Clash Display'
}

function App() {
  return (
    <Box>
      <Header />
      <Main />
      <Affiliates />
      <Course />
    </Box>
  )
}

export default App
