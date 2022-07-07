import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import Component from './Component';

import i18n from './i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading ... </div>}>
        <Component />
      </Suspense>
    </I18nextProvider>
  );
};

export default App;
