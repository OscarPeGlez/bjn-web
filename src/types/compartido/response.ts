export type RespuestaError = {
  descripcion: string;
  mensaje: string;
};

export type RespuestaDTO = {
  Error: boolean;
  DescripcionError: string;
  MensajeTecnico: string;
};

export type RespuestaInventarioError = {
  mensaje: string;
};

export type RespuestaInventarioDTO = {
  existeError: boolean;
  mensajeError: string;
};

export enum EsExito {
  NO = 0,
  SI = 1,
}

export enum EsError {
  NO = 0,
  SI = 1,
}

export class AxiosException {
  constructor(public message: string, public stack: string) {}
}

export type RespuestaErrorGenerica = {
  message: string;
  name: string;
};
