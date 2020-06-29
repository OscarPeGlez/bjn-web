import { createReducer } from '@reduxjs/toolkit';
import { RespuestaError } from '../../../types/compartido/response';
import { Product } from '../../../types/products';
import {
  getProductsKitchen,
  getProductsKitchenError,
  getProductsKitchenExito,
} from '../../actions/kitchen';

type SugerenciasState = {
  cargando: boolean;
  cargado: boolean;
  error: RespuestaError | null;
  resultados: Product[];
};

const estadoInicial: SugerenciasState = {
  error: null,
  cargado: false,
  cargando: false,
  resultados: [],
};

export default createReducer<SugerenciasState>(estadoInicial, builder => {
  return builder
    .addCase(getProductsKitchen, state => {
      state.error = null;
      state.cargado = false;
      state.cargando = true;
      state.resultados = [];
    })
    .addCase(getProductsKitchenExito, (state, action) => {
      state.error = null;
      state.cargado = true;
      state.cargando = false;
      state.resultados = action.payload;
    })
    .addCase(getProductsKitchenError, state => {
      state.error = null;
      state.cargado = true;
      state.cargando = false;
      state.resultados = [];
    });
});
