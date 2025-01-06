import { useState } from 'react';
import { Product } from '../types/product';
import styles from './ImageViewer.module.css';
import LightBox from './Lightbox';

type ImageViewerProps = {
  product: Product;
  preview?: boolean;
};

export default function ImageViewer({ product, preview }: ImageViewerProps) {
  // get an array of keys from product images object
  const images = Object.keys(product.images);
  // tract active images and default to index 0
  const [activeImage, setActiveImage] = useState(images[0]);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  // parse and set new active image on preview click
  function handleImageChange(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    if (!target) return;
    setActiveImage(target.dataset.image || images[0]);
  }

  function openLightBox() {
    setLightBoxOpen(true);
  }

  function closeLightBox() {
    setLightBoxOpen(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main} onClick={openLightBox}>
          <img
            src={product.images[activeImage].main}
            alt="An image of a pair of sneakers with an orange background"
          />
        </div>
        <div className={styles.previews}>
          {images.map((image) => (
            <div
              key={image}
              data-image={image}
              onClick={handleImageChange}
              className={activeImage === image ? styles.active : ''}
            >
              <img
                src={product.images[image].thumbnail}
                alt="An image of a pair of sneakers with an orange background"
              />
            </div>
          ))}
        </div>
        {preview && (
          <LightBox
            open={lightBoxOpen}
            closeLightBox={closeLightBox}
            product={product}
          />
        )}
      </div>
    </>
  );
}
