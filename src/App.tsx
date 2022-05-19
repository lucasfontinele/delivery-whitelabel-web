import 'styles/base/_reset.scss';

import { useTranslation } from 'react-i18next';
import ApplicationContext from 'hooks/useTheme';

function App() {
  const { t } = useTranslation();

  return (
    <ApplicationContext>
      <p>{t('welcome_to_app')}</p>
    </ApplicationContext>
  );
}

export default App;
