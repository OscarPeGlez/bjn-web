import { createReducer } from '@reduxjs/toolkit';
import { RespuestaError } from '../../../types/compartido/response';
import { ProductKitchen } from '../../../types/kitchen';
import {
  getProductsKitchenError,
  getProductsKitchenExito,
  updateSearchProductKitchen,
} from '../../actions/kitchen';

type SugerenciasState = {
  cargando: boolean;
  cargado: boolean;
  error: RespuestaError | null;
  resultados: ProductKitchen[];
};

const estadoInicial: SugerenciasState = {
  error: null,
  cargado: false,
  cargando: false,
  resultados: [],
};

export default createReducer<SugerenciasState>(estadoInicial, builder => {
  return builder
    .addCase(updateSearchProductKitchen, state => {
      state.error = null;
      state.cargado = false;
      state.cargando = false;
      state.resultados = [];
    })
    .addCase(getProductsKitchenExito, (state, action) => {
      state.error = null;
      state.cargado = false;
      state.cargando = true;
      state.resultados = action.payload;
    })
    .addCase(getProductsKitchenError, state => {
      state.error = null;
      state.cargado = false;
      state.cargando = true;
      state.resultados = [];
    });
});
