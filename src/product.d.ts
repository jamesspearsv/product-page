/**
 * Product type representing a product that might be returned by a e-commerce API.
 */

export type Product = {
  product_name: string;
  product_desc: string;
  price_usd: number;
  sale_usd: number | null;
  images: { [key: string]: { main: string; thumbnail: string } };
};
