export const formatoNumerico = (value: number): string => {
  if (typeof value !== 'number') throw new Error(`Expected number but got ${value}`);
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1,';
  const arr = value.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
};

export const formatoMoneda = (value: number): string => {
  if (!value) return '$0';
  // return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  return `$${formatoNumerico(value)}`;
};

export const soloNumeros = (value: string): string => {
  return value.replace(/^[0-9]$/gim, '');
};
