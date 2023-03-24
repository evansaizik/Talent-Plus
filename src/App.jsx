import Header from "./components/Header"
import Main from "./components/Main"
import { Text } from "@chakra-ui/react"
import Affiliates from "./components/Affiliates"

Text.defaultProps = {
  fontFamily: 'Clash Display'
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Affiliates />
    </div>
  )
}

export default App
