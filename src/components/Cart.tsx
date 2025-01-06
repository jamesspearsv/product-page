import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cart } from '../types/cart';
import styles from './Cart.module.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type CartPreviewProps = {
  cart: Cart;
};

export default function CartPreview({ cart }: CartPreviewProps) {
  console.log(cart);
  return (
    <div className={styles.cartContainer}>
      <h4>Cart</h4>
      <hr />
      {cart.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            alignContent: 'center',
            height: '100%',
          }}
        >
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className={styles.cartItem}>
              <img src={item.image} />
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{item.name}</div>
                <div>
                  <span className={styles.itemPrice}>
                    ${item.price.toFixed(2)} x {item.quantity}
                  </span>
                  <span className={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
              <button className={styles.trashButton}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className={styles.trashIcon}
                  size="lg"
                />
              </button>
            </div>
          ))}
          <button className={styles.checkoutButton}>Checkout</button>
        </>
      )}
    </div>
  );
}
