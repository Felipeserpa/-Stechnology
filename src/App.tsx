import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Portfolio from './assets/pages/Portfolio';
import Presentation from './assets/pages/Presentation';
import Skills from './assets/pages/Skills';
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
