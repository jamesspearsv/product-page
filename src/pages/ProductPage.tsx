import ActionButtons from '../components/ActionButtons';
import ImageViewer from '../components/ImageViewer';
import ProductInfo from '../components/ProductInfo';
import product from '../assets/product.json';
import { Cart, cartUpdater } from '../types/cart';

type ProductPageProps = {
  cart: Cart;
  updateCart: cartUpdater;
};

export default function ProductPage({ cart, updateCart }: ProductPageProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        marginTop: '3rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageViewer product={product} />
      </div>
      <div>
        <ProductInfo product={product} />
        <ActionButtons product={product} cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
}
