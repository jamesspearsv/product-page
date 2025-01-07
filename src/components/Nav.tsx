import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import image from '/images/image-avatar.png';
import { Cart } from '../types/cart';
import { useState } from 'react';
import CartPreview from './Cart';

type NavProps = {
  cart: Cart;
};

export default function Nav({ cart }: NavProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCartClick() {
    setCartOpen((cartOpen) => !cartOpen);
  }

  function handleMenuToggle() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.listContainer}>
        <div className={styles.hamburger} onClick={handleMenuToggle}>
          =
        </div>
        <div className={styles.wordmark}>sneakers</div>
        <ul
          className={styles.list}
          style={menuOpen ? { transform: 'translateX(0)' } : {}}
        >
          <div className={styles.closeMenu} onClick={handleMenuToggle}>
            x
          </div>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div
          className={styles.overlay}
          style={menuOpen ? { transform: 'translateX(0)' } : {}}
        ></div>
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.cartIcon}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faCartShopping}
            size="xl"
            onClick={handleCartClick}
          />
          {cart.length > 0 && (
            <div>
              <span>
                {cart.reduce((total, item) => {
                  return total + item.quantity;
                }, 0)}
              </span>
            </div>
          )}
        </div>

        <img className={styles.avatar} src={image} alt="user avatar image" />
        {cartOpen && <CartPreview cart={cart} />}
      </div>
    </nav>
  );
}
