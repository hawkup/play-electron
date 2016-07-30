import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './configureStore';
import Root from './components/Root';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    // eslint-disable-next-line no-shadow, global-require
    const Root = require('./components/Root').default;
    ReactDOM.render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
      rootEl
    );
  });
}
