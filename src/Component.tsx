import React from 'react';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t, i18n } = useTranslation();

  // Change language without re-loading application.
  const switchLanguage = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const langKey = event.target.value;

    try {
      const resource = await import(`./locales/${langKey}.json`);

      await i18n.addResourceBundle(langKey, 'translation', resource.default.translation);
      await i18n.changeLanguage(langKey);
    } catch (error) {
      console.log('The langKey is possibly invalid ', error);
    }
  };

  return (
    <div>
      <h2>Minimal React TS App with React-i18next Lazyloading</h2>
      <p>{t('welcome')}</p>
      <select onChange={switchLanguage}>
        <option>Select Language</option>
        <option value="en">English</option>
        <option value="ja">Japan</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default Component;
