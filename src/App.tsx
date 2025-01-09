import Nav from './components/Nav';
import ProductPage from './pages/ProductPage';
import { useState } from 'react';
import { Cart, cartUpdater } from './types/cart';
import PRODUCT from './assets/product.json';

function App() {
  /*
  hack: management of cart state would be better managed through
  a state management library or the useContext hook
  */
  const [cart, setCart] = useState<Cart | []>([]);

  const updateCart: cartUpdater = (action, item) => {
    if (action === 'add') {
      const newCart = [...cart];
      newCart.push({ ...item, quantity: 1 });
      setCart(newCart);
    }

    if (action === 'increment') {
      const newCart = [...cart];
      const index = newCart.findIndex((element) => element.name === item.name);
      newCart[index].quantity++;
      setCart(newCart);
    }

    if (action === 'decrement') {
      const newCart = [...cart];
      const index = newCart.findIndex((element) => element.name === item.name);

      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      } else {
        newCart.splice(index, 1);
      }

      setCart(newCart);
    }
  };

  return (
    <>
      <Nav cart={cart} setCart={setCart} />
      <main>
        <ProductPage cart={cart} updateCart={updateCart} product={PRODUCT} />
      </main>
    </>
  );
}

export default App;
