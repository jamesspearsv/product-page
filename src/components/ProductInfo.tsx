import { Product } from '../product';
import styles from './ProductInfo.module.css';

type ProductInfoProps = {
  product: Product;
};

// todo: add remainder of product info
// todo: add ability to check if item in on sale
export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <div className={styles.company}>SNEAKER COMPANY</div>
      <h1>{product.product_name}</h1>
      <p className={styles.desc}>{product.product_desc}</p>
      {product.sale_usd ? (
        <div>
          <div className={styles.price}>
            ${product.sale_usd.toFixed(2)}
            <span>{(product.sale_usd / product.price_usd) * 100}%</span>
          </div>
          <div className={styles.sale}>${product.price_usd.toFixed(2)}</div>
        </div>
      ) : (
        <p>None</p>
      )}
    </div>
  );
}
