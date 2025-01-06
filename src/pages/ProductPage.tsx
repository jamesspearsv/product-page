import ActionButtons from '../components/ActionButtons';
import ImageViewer from '../components/ImageViewer';
import ProductInfo from '../components/ProductInfo';
import PRODUCT from '../assets/product.json';
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
  product = PRODUCT,
  cart,
  updateCart,
}: ProductPageProps) {
  // get an array of keys from product images object
  const images = Object.keys(product.images);
  // track active images and default to index 0
  // key for product.images i.e. -- image1
  const [activeImage, setActiveImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
        <ImageViewer
          product={product}
          images={images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          preview
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
        product={product}
        images={images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
}
