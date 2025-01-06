import { Product } from '../types/product';
import styles from './ImageViewer.module.css';

type ImageViewerProps = {
  product: Product;
  images: string[];
  activeImage: string;
  setActiveImage: (image: string) => void;
  preview?: boolean;
  openLightBox?: () => void;
};

export default function ImageViewer({
  product,
  images,
  activeImage,
  setActiveImage,
  preview,
  openLightBox,
}: ImageViewerProps) {
  // parse and set new active image on preview click
  function handleImageChange(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    if (target) {
      setActiveImage(target.dataset.image || images[0]);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.main}
          onClick={preview ? openLightBox : () => null}
        >
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
      </div>
    </>
  );
}
