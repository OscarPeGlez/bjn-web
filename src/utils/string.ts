export const trimAllWhitespace = (value: string): string => {
  return value.replace(/\s+/g, ' ').trim();
};

export const soloDigitos = (valor: string): string => {
  return valor.replace(/[^0-9]/gim, '');
};

export const soloAlfanumericos = (valor: string): string => {
  return valor.replace(/[^a-zA-Z0-9]/gim, '');
};

export const soloAlfanumericosEspacio = (valor: string): string => {
  return valor.replace(/[^a-zA-Z0-9\s]/gim, '');
};

export const soloCaracteresNombre = (valor: string): string => {
  return valor.replace(/[^a-zA-Z\s\u00C0-\u024F]/gim, '');
};

export const soloAlfanumericosGuion = (valor: string): string => {
  return valor.replace(/[^a-zA-Z0-9-]/gim, '');
};
