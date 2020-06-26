import axiosGlobal, { AxiosInstance, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { estaDefinido } from '.';

export const fromRequest = <T = any>(
  config: any,
  instanciaAxios?: any,
): Observable<AxiosResponse<T>> => {
  const axios: AxiosInstance = estaDefinido(instanciaAxios) ? instanciaAxios : axiosGlobal;

  return new Observable<AxiosResponse<T>>(observer => {
    const cancelToken = axiosGlobal.CancelToken.source();
    const { token } = cancelToken;
    const { url } = config;
    axios
      .request<T>({
        ...config,
        cancelToken: url.includes('ConsultarInformacionPresupuesto') ? undefined : token,
      })
      .then(
        (result: any) => {
          observer.next(result);
          observer.complete();
        },
        err => {
          if (axiosGlobal.isCancel(err)) {
            observer.complete();
          } else {
            observer.error(err);
          }
        },
      );
    return () => cancelToken.cancel();
  });
};
