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
      <ImageViewer product={product} />
      <div>
        <ProductInfo />
        <ActionButtons />
      </div>
    </div>
  );
}
