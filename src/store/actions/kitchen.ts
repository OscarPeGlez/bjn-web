import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  createAction,
} from '@reduxjs/toolkit';
import { RespuestaError } from '../../types/compartido/response';
import { ProductKitchen } from '../../types/kitchen';
import { withPayloadType } from '../util';

export const getProductsKitchen: ActionCreatorWithoutPayload = createAction(
  '[COCINA] Obtener Inventario Cocina',
);

export type GetProductsKitchen = ReturnType<typeof getProductsKitchen>;

export const getProductsKitchenExito: ActionCreatorWithPayload<ProductKitchen[]> = createAction(
  '[COCINA] Obtener Inventario Cocina Exito',
  withPayloadType<ProductKitchen[]>(),
);

export type GetProductsKitchenExito = ReturnType<typeof getProductsKitchenExito>;

export const getProductsKitchenError: ActionCreatorWithPayload<RespuestaError> = createAction(
  '[COCINA] Obtener Inventario Cocina Error',
  withPayloadType<RespuestaError>(),
);

export type GetProductsKitchenError = ReturnType<typeof getProductsKitchenError>;

export const updateSearchProductKitchen: ActionCreatorWithPayload<string> = createAction(
  '[COCINA] Actualizar Busqueda',
  withPayloadType<string>(),
);

export type UpdateSearchProductKitchen = ReturnType<typeof updateSearchProductKitchen>;
