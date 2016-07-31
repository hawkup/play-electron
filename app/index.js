import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './configureStore';
import Root from './containers/Root';

const history = syncHistoryWithStore(hashHistory, store);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line no-shadow, global-require
    const Root = require('./containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      rootEl
    );
  });
}
