import { Product } from '../product';

type ProductInfoProps = {
  product: Product;
};

// todo: add remainder of product info
// todo: add ability to check if item in on sale
export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <div>SNEAKER COMPANY</div>
      <h2>{product.product_name}</h2>
      <p>{product.product_desc}</p>
      <div>{product.sale_usd}</div>
    </div>
  );
}
