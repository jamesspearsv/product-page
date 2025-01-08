import { Product } from '../types/product';
import styles from './ProductInfo.module.css';

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.company}>SNEAKER COMPANY</div>
      <h1 className={styles.name}>{product.product_name}</h1>
      <p className={styles.desc}>{product.product_desc}</p>
      {product.sale_usd ? (
        <div>
          <div className={styles.price}>
            <div>${product.sale_usd.toFixed(2)}</div>
            <div>{(product.sale_usd / product.price_usd) * 100}%</div>
          </div>
          <div className={styles.sale}>${product.price_usd.toFixed(2)}</div>
        </div>
      ) : (
        // todo add elements for items not on sale
        <p>None</p>
      )}
    </div>
  );
}
