import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from '../types/product';
import styles from './ImageViewer.module.css';

type ImageViewerProps = {
  images: Product['images'];
  activeImage: string;
  setActiveImage: (image: string) => void;
  openLightBox?: () => void;
  hasArrows?: boolean;
};

export default function ImageViewer({
  images,
  activeImage,
  setActiveImage,
  openLightBox,
  hasArrows,
}: ImageViewerProps) {
  // parse and set new active image on preview click
  function handleThumbnailClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    if (target && target.dataset.image) {
      setActiveImage(target.dataset.image);
    }
  }

  function handleImageChange(action: 'back' | 'next') {
    // parse array of images and find current index
    const imageList = Object.keys(images);
    let index = imageList.findIndex((image) => image === activeImage);

    // calculate new index based on action: next or back
    if (action === 'next') {
      index = index < imageList.length - 1 ? index + 1 : 0;
    }

    if (action === 'back') {
      index = index > 0 ? index - 1 : imageList.length - 1;
    }

    // set new active image
    setActiveImage(imageList[index]);
  }

  const arrowStyles = hasArrows ? { display: 'block' } : {};

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <button
            onClick={() => handleImageChange('back')}
            className={styles.arrowButton}
            style={arrowStyles}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <img
            onClick={openLightBox ? openLightBox : () => null}
            src={images[activeImage].main}
            alt="An image of a pair of sneakers with an orange background"
          />
          <button
            onClick={() => handleImageChange('next')}
            className={styles.arrowButton}
            style={arrowStyles}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
        <div className={styles.previews}>
          {Object.keys(images).map((image) => (
            <div
              key={image}
              data-image={image}
              onClick={handleThumbnailClick}
              className={activeImage === image ? styles.active : ''}
            >
              <img
                src={images[image].thumbnail}
                alt="An image of a pair of sneakers with an orange background"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
