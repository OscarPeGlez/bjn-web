import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_ENDPOINT } from '../environment';
import { Product, ResponseProducts } from '../types/products';
import { axios } from '../utils/axios';
import { fromRequest } from '../utils/observable';
import { parseProductsKitchen } from '../utils/parser';

export const getProductsKitchenAPI = (plb: string): Observable<Product[]> => {
  const url = `${API_ENDPOINT}/productsKitchen`;
  return fromRequest<ResponseProducts>(
    {
      url,
      method: 'GET',
      params: {
        plb,
      },
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
      return response.data.ResultadoProductos.map(value => parseProductsKitchen(value));
    }),
  );
};
