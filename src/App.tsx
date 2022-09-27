import { BrowserRouter } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import ApplicationContext from 'hooks/useTheme';
import { StoreProvider } from 'contexts/store';
import { OffersProvider } from 'contexts/offers';
import { CartProvider } from 'contexts/cart';
import Router from 'routes/index';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App() {
  // const { t } = useTranslation();

  return (
    <BrowserRouter>
      <ApplicationContext>
        <StoreProvider>
          <OffersProvider>
            <CartProvider>
              <ThemeProvider theme={theme}>
                <Router />
                <GlobalStyles />
              </ThemeProvider>
            </CartProvider>
          </OffersProvider>
        </StoreProvider>
      </ApplicationContext>
    </BrowserRouter>
  );
}

export default App;
