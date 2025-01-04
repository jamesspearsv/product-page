import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import image from '/images/image-avatar.png';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.listContainer}>
        <div className={styles.wordmark}>sneakers</div>
        <ul className={styles.list}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* todo:  add buttons and functionality */}
      <div className={styles.actionContainer}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faCartShopping}
          size="lg"
        />
        <img src={image} alt="user avatar image" />
      </div>
    </nav>
  );
}
