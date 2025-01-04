/**
 * Product type representing a product that might be returned by a e-commerce API.
 */

/* 
todo: add product images property
todo: add imagesURI type
 */
export type Product = {
  product_name: string;
  prouduct_desc: string;
  price_usd: number;
  sale_usd: number | null;
};
