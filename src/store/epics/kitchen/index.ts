import { combineEpics } from 'redux-observable';
import {
  actualizarConsultaProductosEpic$,
  getProductsKitchenEpic$,
  GetProductsKitchenInput,
  GetProductsKitchenOutput,
} from './productsKitchen';

export type ProductsKitchenInput = GetProductsKitchenInput;

export type ProductsKitchenOutput = GetProductsKitchenOutput;

export const kitchenEpic$ = combineEpics(getProductsKitchenEpic$, actualizarConsultaProductosEpic$);
