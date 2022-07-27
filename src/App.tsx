import CardSkeleton from 'components/Card/skeleton';
import ApplicationContext from 'hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App() {
  const { t } = useTranslation();

  return (
    <ApplicationContext>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <p>{t('welcome_to_app')}</p>
        <CardSkeleton />
      </ThemeProvider>
    </ApplicationContext>
  );
}

export default App;
