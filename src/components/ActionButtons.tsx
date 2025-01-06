import { Product } from '../types/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import styles from './ActionButtons.module.css';
import { Cart, cartUpdater } from '../types/cart';

type ActionButtonsProps = {
  product: Product;
  cart: Cart;
  updateCart: cartUpdater;
};

export default function ActionButtons({
  product,
  cart,
  updateCart,
}: ActionButtonsProps) {
  const cartIndex = cart.findIndex(
    (item) => item.name === product.product_name
  );

  function handleAddToCart() {
    console.log('clicked');
    const item = {
      name: product.product_name,
      price: product.sale_usd || product.price_usd,
    };

    updateCart('add', item);
  }

  function handleIncrement() {
    const item = {
      name: product.product_name,
      price: product.sale_usd || product.price_usd,
    };

    updateCart('increment', item);
  }

  function handleDecrement() {
    const item = {
      name: product.product_name,
      price: product.sale_usd || product.price_usd,
    };

    updateCart('decrement', item);
  }

  return (
    <div className={styles.container}>
      {cartIndex != -1 ? (
        <div className={styles.quantityContainer}>
          <button onClick={handleDecrement}>
            <FontAwesomeIcon icon={faMinus} className={styles.quantityIcon} />
          </button>
          <div>{cart[cartIndex].quantity}</div>
          <button onClick={handleIncrement}>
            <FontAwesomeIcon icon={faPlus} className={styles.quantityIcon} />
          </button>
        </div>
      ) : (
        <button className={styles.addToCart} onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Add to cart</span>
        </button>
      )}
    </div>
  );
}
