import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { getProductsKitchenAPI } from '../../../api/kitchen';
import {
  GetProductsKitchen,
  getProductsKitchen,
  GetProductsKitchenError,
  getProductsKitchenError,
  GetProductsKitchenExito,
  getProductsKitchenExito,
  updateSearchProductKitchen,
  UpdateSearchProductKitchen,
} from '../../actions/kitchen';
import { RootState } from '../../reducers';

export type ConsultaProductoAccionesEntrada = UpdateSearchProductKitchen | GetProductsKitchen;

export type ConsultaProductoAccionesSalida = GetProductsKitchen;

export const actualizarConsultaProductosEpic$: Epic<
  ConsultaProductoAccionesEntrada,
  ConsultaProductoAccionesSalida,
  RootState
> = action$ =>
  action$.pipe(
    filter(updateSearchProductKitchen.match),
    // filter(action => trimAllWhitespace(action.payload).length >= 2),
    debounceTime(1400),
    map(() => getProductsKitchen()),
  );

export type GetProductsKitchenInput =
  | GetProductsKitchen
  | GetProductsKitchenExito
  | GetProductsKitchenError;

export type GetProductsKitchenOutput = GetProductsKitchenExito | GetProductsKitchenError;

export const getProductsKitchenEpic$: Epic<
  GetProductsKitchenInput,
  GetProductsKitchenOutput,
  RootState
> = (action$, state$) =>
  action$.pipe(
    filter(getProductsKitchen.match),
    withLatestFrom(state$),
    map(([, state]) => state.kitechenReducer.consulta),
    switchMap(consulta =>
      getProductsKitchenAPI(consulta).pipe(
        map(results => getProductsKitchenExito(results)),
        catchError(error => {
          return of(
            getProductsKitchenError({
              mensaje: error.message,
              descripcion: error.stack,
            }),
          );
        }),
      ),
    ),
  );
