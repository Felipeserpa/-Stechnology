import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import About from './assets/sections/About';
import Contact from './assets/sections/Contact';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Portfolio from './assets/sections/Portfolio';
import Presentation from './assets/sections/Presentation';
import Skills from './assets/sections/Skills';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';

function App() {
  return (
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
  );
}

export default App;
