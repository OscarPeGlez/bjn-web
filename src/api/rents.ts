import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_ENDPOINT } from '../environment';
import { Rent, ResponseRents } from '../types/rent';
import { axios } from '../utils/axios';
import { fromRequest } from '../utils/observable';
import { parseRents } from '../utils/parser';

export const getRentsAPI = (): Observable<Rent[]> => {
  const url = `${API_ENDPOINT}/rents`;
  return fromRequest<ResponseRents>(
    {
      url,
      method: 'GET',
    },
    axios,
  ).pipe(
    map(response => {
      if (response.data.Error) {
        const error = {
          descripcion: 'Servicio no disponible',
          mensaje: response.data.MensajeTecnico,
        };

        throw error;
      }
      return response.data.ResultadoRentas.map(value => parseRents(value));
    }),
  );
};
