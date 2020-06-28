import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { getRentsAPI } from '../../../api/rents';
import {
  GetRents,
  getRents,
  GetRentsError,
  getRentsError,
  GetRentsExito,
  getRentsExito,
} from '../../actions/rents';
import { RootState } from '../../reducers';

// export type ConsultarRentasAccionesEntrada = UpdateSearchRents | GetRents;

// export type ConsultarRentasAccionesSalida = GetRentsError | GetRentsExito;

// export const actualizarConsultarRentasEpic$: Epic<
//   ConsultarRentasAccionesEntrada,
//   ConsultarRentasAccionesSalida,
//   RootState
// > = action$ =>
//   action$.pipe(
//     filter(updateSearchRents.match),
//     filter(action => trimAllWhitespace(action.payload).length >= 2),
//     debounceTime(300),
//     map(() => getRents()),
//   );

export type GetRentsInput = GetRents | GetRentsExito | GetRentsError;

export type GetRentsOutput = GetRentsExito | GetRentsError;

export const getRentsEpic$: Epic<GetRentsInput, GetRentsOutput, RootState> = action$ =>
  action$.pipe(
    filter(getRents.match),
    switchMap(() =>
      getRentsAPI().pipe(
        map(results => getRentsExito(results)),
        catchError(error => {
          return of(
            getRentsError({
              mensaje: error.message,
              descripcion: error.stack,
            }),
          );
        }),
      ),
    ),
  );
