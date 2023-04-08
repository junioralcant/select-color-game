import {ThemeProvider} from 'styled-components';
import {Home} from './pages/home';
import {defaultTheme} from './styles/themes/defaults';
import {GlobalStyle} from './styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
