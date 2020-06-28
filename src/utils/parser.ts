import { Product, ProductDTO } from '../types/products';
import { Rent, RentDTO } from '../types/rent';

export const parseProductsKitchen = (dto: ProductDTO): Product => {
  return {
    name: dto.Nombre,
    sku: dto.Sku,
    stock: dto.Inventario,
    imagenUrl: dto.ImagenURL,
  };
};

export const parseRents = (dto: RentDTO): Rent => {
  const {
    Direccion,
    Responsable,
    RestaPorCobrar,
    Status,
    SumaCobrada,
    TotalDeRenta,
  } = dto.DetalleRenta;
  return {
    id: dto.Id,
    detalleRenta: {
      direccion: Direccion,
      responsable: Responsable,
      restaPorCobrar: RestaPorCobrar,
      status: Status,
      sumaCobrada: SumaCobrada,
      totalDeRenta: TotalDeRenta,
    },
    fechaEntrada: dto.FechaEntrada,
    fechaSalida: dto.FechaSalida,
    rentador: dto.Rentador,
  };
};
