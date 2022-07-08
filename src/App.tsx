import React, { Suspense } from 'react';
import { init } from './i18n';

const LazyComponent = React.lazy(async () => {
  await init();

  return import('./Component');
});

const App = () => {
  return (
    <Suspense fallback={<div>Loading ... </div>}>
      <LazyComponent />
    </Suspense>
  );
};

export default App;
