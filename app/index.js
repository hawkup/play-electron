import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootEl
    );
  });
}
