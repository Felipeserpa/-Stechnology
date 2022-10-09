import { ThemeProvider } from "styled-components"
import { Footer } from "./assets/components/Footer";
import { Header } from "./assets/components/Header"
import { GlobalStyles } from "./assets/styles/GlobalStyles"
import theme from "./assets/styles/theme"

function App() {
 

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <div className="height"></div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App
