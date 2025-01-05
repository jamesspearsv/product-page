import ActionButtons from '../components/ActionButtons';
import ImageViewer from '../components/ImageViewer';
import ProductInfo from '../components/ProductInfo';
import product from '../assets/product.json';

export default function ProductPage() {
  console.log(product);
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
        <ActionButtons />
      </div>
    </div>
  );
}
