import React from 'react';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation();

  // Change language without re-loading application.
  const changeLanguageHandler = async () => {
    const resource = await import('./locales/ja.json');

    await i18n.addResourceBundle('ja', 'translation', resource.default.translation);
    await i18n.changeLanguage('ja');
  };

  return (
    <div>
      <h2>Minimal React TS App with React-i18next Lazyloading</h2>
      <p>{t('welcome')}</p>
      <button onClick={changeLanguageHandler}>Change to Japanese</button>
    </div>
  );
};

export default Component;
