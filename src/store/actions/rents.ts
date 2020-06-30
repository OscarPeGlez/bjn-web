import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  createAction,
} from '@reduxjs/toolkit';
import { RespuestaError } from '../../types/compartido/response';
import { Rent } from '../../types/rent';
import { withPayloadType } from '../util';

export const getRents: ActionCreatorWithoutPayload = createAction('[RENTS] Obtener Rentas');

export type GetRents = ReturnType<typeof getRents>;

export const getRentsExito: ActionCreatorWithPayload<Rent[]> = createAction(
  '[RENTS] Obtener Rentas Exito',
  withPayloadType<Rent[]>(),
);

export type GetRentsExito = ReturnType<typeof getRentsExito>;

export const getRentsError: ActionCreatorWithPayload<RespuestaError> = createAction(
  '[RENTS] Obtener Rentas Error',
  withPayloadType<RespuestaError>(),
);

export type GetRentsError = ReturnType<typeof getRentsError>;

export const updateSearchRents: ActionCreatorWithPayload<string> = createAction(
  '[RENTS] Actualizar Busqueda',
  withPayloadType<string>(),
);

export type UpdateSearchRents = ReturnType<typeof updateSearchRents>;

export const cleanRents: ActionCreatorWithoutPayload = createAction('[RENTS] Limpiar Rentas');

export type CleanRents = ReturnType<typeof cleanRents>;
