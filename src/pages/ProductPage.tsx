import ActionButtons from '../components/ActionButtons';
import ImageViewer from '../components/ImageViewer';
import ProductInfo from '../components/ProductInfo';
import { Cart, cartUpdater } from '../types/cart';
import { useState } from 'react';
import { Product } from '../types/product';
import LightBox from '../components/Lightbox';

type ProductPageProps = {
  product: Product;
  cart: Cart;
  updateCart: cartUpdater;
};

export default function ProductPage({
  product,
  cart,
  updateCart,
}: ProductPageProps) {
  // track active images and default image
  const [activeImage, setActiveImage] = useState(
    Object.keys(product.images)[0]
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        marginTop: '3rem',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageViewer
          images={product.images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          openLightBox={() => setLightboxOpen(true)}
        />
      </div>
      <div>
        <ProductInfo product={product} />
        <ActionButtons product={product} cart={cart} updateCart={updateCart} />
      </div>
      <LightBox
        open={lightboxOpen}
        closeLightBox={() => setLightboxOpen(false)}
        images={product.images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
}
