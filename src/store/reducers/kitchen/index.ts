import { combineReducers } from 'redux';
import consultaReducer from './consulta';
import resultadosReducer from './resultados';

export const kitechenReducer = combineReducers({
  consulta: consultaReducer,
  resultados: resultadosReducer,
});

export type ProductoState = ReturnType<typeof kitechenReducer>;
