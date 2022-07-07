import React from 'react';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>Minimal React TS App with React-i18next Lazyloading</h2>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default Component;
