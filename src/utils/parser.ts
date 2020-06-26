import { ProductKitchen, ProductKitchenDTO } from '../types/kitchen';

export const parseProductsKitchen = (dto: ProductKitchenDTO): ProductKitchen => {
  return {
    name: dto.Nombre,
    sku: dto.Sku,
    stock: dto.Inventario,
    imagenUrl: dto.ImagenURL,
  };
};
