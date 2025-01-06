import { Product } from '../types/product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import styles from './ActionButtons.module.css';

type ActionButtonsProps = {
  product: Product;
};

export default function ActionButtons({ product }: ActionButtonsProps) {
  console.log(product);
  return (
    <div className={styles.container}>
      {/* todo: implement conditional rendering for buttons
      <div className={styles.quantityContainer}>
        <button>
          <FontAwesomeIcon icon={faMinus} className={styles.quantityIcon} />
        </button>
        <div>0</div>
        <button>
          <FontAwesomeIcon icon={faPlus} className={styles.quantityIcon} />
        </button>
      </div> */}
      <button className={styles.addToCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
