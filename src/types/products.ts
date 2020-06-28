export type Product = {
  sku: number;
  name: string;
  stock: number;
  imagenUrl: string;
};

export type ProductDTO = {
  Sku: number;
  Nombre: string;
  Inventario: number;
  ImagenURL: string;
};
export type ResponseProducts = {
  DescripcionError: any;
  Error: boolean;
  MensajeTecnico: null;
  ResultadoProductos: ProductDTO[];
  TotalPaginas: number;
  TotalRegistros: number;
};
