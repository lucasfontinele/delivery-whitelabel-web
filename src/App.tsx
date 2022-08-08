import { BrowserRouter } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import ApplicationContext from 'hooks/useTheme';
import Router from 'routes/index';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App() {
  // const { t } = useTranslation();

  return (
    <BrowserRouter>
      <ApplicationContext>
        <ThemeProvider theme={theme}>
          <Router />
          <GlobalStyles />
        </ThemeProvider>
      </ApplicationContext>
    </BrowserRouter>
  );
}

export default App;
