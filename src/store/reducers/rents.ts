import { createReducer } from '@reduxjs/toolkit';
import { RespuestaError } from '../../types/compartido/response';
import { Rent } from '../../types/rent';
import { cleanRents, getRents, getRentsError, getRentsExito } from '../actions/rents';

type RentsReducer = {
  cargando: boolean;
  cargado: boolean;
  error: RespuestaError | null;
  resultados: Rent[];
};

const initialState: RentsReducer = {
  cargando: false,
  cargado: false,
  error: null,
  resultados: [],
};

export default createReducer<RentsReducer>(initialState, builder => {
  return builder
    .addCase(getRents, state => {
      state.cargando = true;
    })
    .addCase(getRentsExito, (state, action) => {
      state.cargando = false;
      state.resultados = action.payload;
      state.cargado = true;
    })
    .addCase(getRentsError, (state, action) => {
      state.cargando = false;
      state.resultados = [];
      state.cargado = false;
      state.error = action.payload;
    })
    .addCase(cleanRents, state => {
      state.cargando = false;
      state.resultados = [];
      state.error = null;
    });
});
