import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { history } from '../util';
import countReducer from './counter';
import { kitechenReducer } from './kitchen';
import rentsReducer from './rents';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  countReducer,
  kitechenReducer,
  rentsReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
