import ActionButtons from '../components/ActionButtons';
import ImageCarousel from '../components/ImageCarousel';
import ProductInfo from '../components/ProductInfo';

export default function ProductPage() {
  return (
    <>
      <ImageCarousel />
      <div>
        <ProductInfo />
        <ActionButtons />
      </div>
    </>
  );
}
