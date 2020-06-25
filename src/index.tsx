import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from 'connected-react-router';
import * as history from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import './polyfills';
import services from './services';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/reducers';
// import { history } from './store/util';

const store2 = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(services)));

const history2 = history.createBrowserHistory();

ReactDOM.render(
  <Provider store={store2}>
    <ConnectedRouter history={history2}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
