import { ThemeProvider } from "styled-components"
import { Header } from "./assets/components/Header"
import { GlobalStyles } from "./assets/styles/GlobalStyles"
import theme from "./assets/styles/theme"

function App() {
 

  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      </ThemeProvider>
    </div>
  )
}

export default App
