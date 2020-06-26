export type ProductKitchen = {
  sku: number;
  name: string;
  stock: number;
  imagenUrl: string;
};

export type ProductKitchenDTO = {
  Sku: number;
  Nombre: string;
  Inventario: number;
  ImagenURL: string;
};
export type ResponseProductsKitchen = {
  DescripcionError: any;
  Error: boolean;
  MensajeTecnico: null;
  ResultadoProductos: ProductKitchenDTO[];
  TotalPaginas: number;
  TotalRegistros: number;
};
