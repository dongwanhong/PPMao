import React from 'react';
import StoreProvider from '../store';
import IntlContainer from '../i18n';
import RouterProvider from '../router';

const App = () => (
  <StoreProvider>
    <IntlContainer>
      <RouterProvider />
    </IntlContainer>
  </StoreProvider>
);

export default App;
