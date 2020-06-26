import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { epicMiddleware, rootEpic } from './epics';
import { rootReducer } from './reducers';
import { history } from './util';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware, routerMiddleware(history)],
});

epicMiddleware.run(rootEpic);
