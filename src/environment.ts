export const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const esProduccion = process.env.REACT_APP_ES_PRODUCCION === 'true';

const impresionBaseUrl = esProduccion ? `http://${window.location.hostname}:9050` : '';
export const IMPRESION_TICKETS_API_ENDPOINT = `${impresionBaseUrl}${process.env.REACT_APP_IMPRESION_TICKETS_API_ENDPOINT}`;

const cajaBaseUrl = esProduccion ? `http://${window.location.hostname}:9014` : '';
export const CAJA_PAGOS_ENDPOINT = `${cajaBaseUrl}${process.env.REACT_APP_CAJA_PAGOS_ENDPOINT}`;
export const CAJA_PAGOS_INTERFAZ_ENDPOINT = `${cajaBaseUrl}${process.env.REACT_APP_CAJA_PAGOS_INTERFAZ_ENDPOINT}`;
export const ACCESO_CAJA_ENDPOINT = `${cajaBaseUrl}${process.env.REACT_APP_ACCESO_CAJA_ENDPOINT}`;

const ventaDocumentosBaseUrl = esProduccion ? `http://${window.location.hostname}:9024` : '';

export const VENTA_DOCUMENTOS_API_ENDPOINT = `${ventaDocumentosBaseUrl}${process.env.REACT_APP_VENTA_DOCUMENTOS_API_ENDPOINT}`;

const impresionDocumentosBaseUrl = esProduccion ? `http://${window.location.hostname}:9010` : '';
export const SERVICIO_SAZ_IMPRESION_API_ENDPOINT = `${impresionDocumentosBaseUrl}${process.env.REACT_APP_SERVICIO_SAZ_IMPRESION_API_ENDPOINT}`;

// const queryParams = new URL(document.location.href).searchParams;
// export const USUARIO = queryParams
//   .get('usuario')
//   .split('T')
//   .join('')
//   .split('t')
//   .join('')
//   .split('C')
//   .join('');
// export const PASSWORD = queryParams.get('password');
// export const ID_EMPLEADO = queryParams
//   .get('usuario')
//   .split('T')
//   .join('')
//   .split('t')
//   .join('')
//   .split('C')
//   .join('');
// export const CLAVE_VENTA = queryParams.get('usuario');
// export const ESTACION_TRABAJO = queryParams.get('ws');
// export const ID_PUESTO = queryParams.get('puesto');
// export const SUCURSAL = queryParams.get('sucursal');
// export const PAIS = queryParams.get('pais');
// export const CANAL = queryParams.get('canal');

// export const ID_PROMOCION_ULTIMA_PIEZA = 163884;

// export const IP_ESTACION_TRABAJO = window.location.hostname;

// export const NOMBRE_APLICACION_PAGOS = 'FRONTFORMASPAGO';

// export const NOMBRE_APLICACION_EPOS = 'FRONTEPOS';

// export const PREFIJO_ID_SESION = 'C7o0m0eDrCc2i9o';

// export const REFERENCIA_VENTA = 'VentaServicioWeb';

// export const TIENDA = queryParams.get('tienda');

// export const USUARIO_MOC = queryParams.get('usuario');
