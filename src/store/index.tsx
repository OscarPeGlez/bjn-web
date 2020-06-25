import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [epicMiddleware, routerMiddleware(history)],
});

// epicMiddleware.run(rootEpic);
