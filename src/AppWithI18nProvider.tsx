import React, { Suspense } from 'react';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Component from './Component';

const AppWithI18nProvider = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading ... </div>}>
        <Component />
      </Suspense>
    </I18nextProvider>
  );
};

export default AppWithI18nProvider;
