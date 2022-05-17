import React from 'react';

import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return <p>{t('welcome_to_app')}</p>;
}

export default App;
