import axiosGlobal, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { tieneValor } from '.';
import {
  AxiosException,
  RespuestaDTO,
  RespuestaError,
  RespuestaInventarioDTO,
  RespuestaInventarioError,
} from '../types/compartido/response';

const instancia = axiosGlobal.create();

instancia.interceptors.request.use(config => {
  const nuevaConfig: AxiosRequestConfig = {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
  };
  return nuevaConfig;
});

instancia.interceptors.response.use(
  (response: AxiosResponse<RespuestaDTO>) => {
    if (!response.data.Error) return response;

    const newResponse: AxiosResponse<RespuestaError> = {
      config: response.config,
      data: {
        descripcion: response.data.DescripcionError,
        mensaje: response.data.MensajeTecnico,
      },
      headers: response.headers,
      status: 500,
      statusText: '',
    };

    throw newResponse;
  },
  error => {
    const { response }: { response: AxiosResponse } = error;
    return Promise.reject(response);
  },
);

export const axios = instancia;

const instanciaInventario = axiosGlobal.create();

instanciaInventario.interceptors.request.use(config => {
  const nuevaConfig: AxiosRequestConfig = {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  };

  return nuevaConfig;
});

instanciaInventario.interceptors.response.use(
  (response: AxiosResponse<RespuestaInventarioDTO>) => {
    if (!response.data.existeError) return response;

    const newResponse: AxiosResponse<RespuestaInventarioError> = {
      config: response.config,
      data: {
        mensaje: response.data.mensajeError,
      },
      headers: response.headers,
      status: response.status,
      statusText: '',
    };

    throw newResponse;
  },
  error => {
    const { response }: { response: AxiosResponse } = error;
    return Promise.reject(response);
  },
);

export const axiosInventario = instanciaInventario;

const instanciaCotizaciones = axiosGlobal.create();

export const axiosCotizaciones = instanciaCotizaciones;

const instanciaSurtimiento = axiosGlobal.create();

instanciaSurtimiento.interceptors.request.use(config => {
  const nuevaConfig: AxiosRequestConfig = {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  };

  return nuevaConfig;
});

instanciaSurtimiento.interceptors.response.use(undefined, (error: AxiosError) => {
  const { response } = error;

  if (tieneValor(response)) return Promise.reject(response);

  const { message, stack } = error.toJSON() as any;

  return Promise.reject(new AxiosException(message, stack));
});

export const axiosSurtimiento = instanciaSurtimiento;

const instanciaSurtimientoClientes = axiosGlobal.create();

instanciaSurtimientoClientes.interceptors.request.use(config => {
  const nuevaConfig: AxiosRequestConfig = {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  };

  return nuevaConfig;
});

instanciaSurtimientoClientes.interceptors.response.use(undefined, (error: AxiosError) => {
  const { response } = error;

  if (tieneValor(response)) return Promise.reject(response);

  const { message, stack } = error.toJSON() as any;

  return Promise.reject(new AxiosException(message, stack));
});

export const axiosSurtimientoClientes = instanciaSurtimientoClientes;

const instanciaImpresionLocal = axiosGlobal.create();

instanciaImpresionLocal.interceptors.request.use(config => {
  const nuevaConfig: AxiosRequestConfig = {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  };

  return nuevaConfig;
});

instanciaImpresionLocal.interceptors.response.use(undefined, (error: AxiosError) => {
  const { response } = error;

  if (tieneValor(response)) return Promise.reject(response);

  const { message, stack } = error.toJSON() as any;

  return Promise.reject(new AxiosException(message, stack));
});

export const axiosImpresionLocal = instanciaImpresionLocal;

const instanciaSurtimientoElektraCom = axiosGlobal.create();

instanciaSurtimientoElektraCom.interceptors.request.use(config => {
  const nuevaConfig: AxiosRequestConfig = {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  };

  return nuevaConfig;
});

instanciaSurtimientoElektraCom.interceptors.response.use(undefined, (error: AxiosError) => {
  const { response } = error;
  if (tieneValor(response)) return Promise.reject(response);
  const { message, stack } = error.toJSON() as any;

  return Promise.reject(new AxiosException(message, stack));
});

export const axiosSurtimientoElektraCom = instanciaSurtimientoElektraCom;
