export const estaDefinido = (valor: any): boolean => {
  return valor !== null && valor !== undefined;
};

export const tieneValor = (valor: any): boolean =>
  valor !== null && valor !== undefined && valor !== '';

export const chunk = (array: any[], size: number): any[] => {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    // eslint-disable-next-line @typescript-eslint/camelcase
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  // eslint-disable-next-line @typescript-eslint/camelcase
  return chunked_arr;
};

export const convertirUpperLowerCase = (cadena: string): string => {
  if (cadena)
    return cadena.replace(/\w\S*/g, (txt: string) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  return '';
};

export const descomponerClienteElektra = (cadena: string): any => {
  if (cadena) {
    const arreglo = cadena.split('-');
    const datos = {
      negocio: arreglo[0],
      tienda: arreglo[1],
      cliente: arreglo[2],
      digito: arreglo[3],
    };
    return datos;
  }
  return null;
};
