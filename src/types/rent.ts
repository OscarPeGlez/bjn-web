export type DetailRentDTO = {
  Status: number;
  Responsable: string;
  TotalDeRenta: number;
  SumaCobrada: number;
  RestaPorCobrar: number;
  Direccion: string;
};

export type RentDTO = {
  Id: number;
  Rentador: string;
  FechaSalida: string;
  FechaEntrada: string;
  DetalleRenta: DetailRentDTO;
};

export type DetailRent = {
  status: number;
  responsable: string;
  totalDeRenta: number;
  sumaCobrada: number;
  restaPorCobrar: number;
  direccion: string;
};

export type Rent = {
  id: number;
  rentador: string;
  fechaSalida: string;
  fechaEntrada: string;
  detalleRenta: DetailRent;
};

export type ResponseRents = {
  DescripcionError: any;
  Error: boolean;
  MensajeTecnico: null;
  ResultadoRentas: RentDTO[];
  TotalPaginas: number;
  TotalRegistros: number;
};

export enum StatusEnum {
  COMPLETED = 1,
  PENDING_PAYING = 2,
  NEW = 3,
}
