import { useState } from 'react';
import { Product } from '../product';
import styles from './ImageViewer.module.css';

type ImageViewerProps = {
  product: Product;
};

export default function ImageViewer({ product }: ImageViewerProps) {
  // get an array of keys from product images object
  const images = Object.keys(product.images);
  // tract active images and default to index 0
  const [activeImage, setActiveImage] = useState(images[0]);

  // parse and set new active image on preview click
  function handleImageChange(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    if (!target) return;
    setActiveImage(target.dataset.image || images[0]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          src={product.images[activeImage].main}
          alt="An image of a pair of sneakers with an orange background"
        />
      </div>
      <div className={styles.previews}>
        {images.map((image) => (
          <div
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
    </div>
  );
}
