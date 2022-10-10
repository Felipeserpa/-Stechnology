import { ThemeProvider } from "styled-components"
import { About } from "./assets/components/About";
import { Contact } from "./assets/components/Contact";
import { Footer } from "./assets/components/Footer";
import { Header } from "./assets/components/Header"
import { Portfolio } from "./assets/components/Portfolio";
import { Presentation } from "./assets/components/Presentation";
import { Skills } from "./assets/components/Skills";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import theme from "./assets/styles/theme";
import { Toaster } from "react-hot-toast";

function App() {
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <Toaster position="bottom-right" font-size="1 rem" />
        <GlobalStyles />
        <Header />
        <Presentation />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App
