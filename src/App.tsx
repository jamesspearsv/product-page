import Nav from './components/Nav';
import ProductPage from './pages/ProductPage';
import styles from './App.module.css';
import { useState } from 'react';
import { Cart } from './types/cart';

function App() {
  const [cart, setCart] = useState<Cart | []>([]);

  return (
    <>
      <Nav />
      <main className={styles.container}>
        <ProductPage />
      </main>
    </>
  );
}

export default App;
