import { useRef, useEffect } from 'react';
import styles from './Lightbox.module.css';
import { Product } from '../types/product';
import ImageViewer from './ImageViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

type LightBoxProps = {
  open: boolean;
  closeLightBox: () => void;
  product: Product;
  images: string[];
  activeImage: string;
  setActiveImage: (image: string) => void;
};

export default function LightBox({
  open,
  closeLightBox,
  product,
  images,
  activeImage,
  setActiveImage,
}: LightBoxProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef.current) return;

    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);

  function handleImageChange(action: 'next' | 'back') {
    let index = images.findIndex((image) => image === activeImage);

    if (action === 'next') {
      index = index < images.length - 1 ? index + 1 : 0;
    }

    if (action === 'back') {
      index = index > 0 ? index - 1 : images.length - 1;
    }

    setActiveImage(images[index]);
  }

  return (
    <dialog ref={modalRef} className={styles.lightbox}>
      <div>
        <div className={styles.closeContainer}>
          <button onClick={closeLightBox} className={styles.closeButton}>
            <FontAwesomeIcon
              className={styles.closeIcon}
              icon={faClose}
              size="xl"
            />
          </button>
        </div>
        <div className={styles.viewerContainer}>
          <button onClick={() => handleImageChange('back')}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <ImageViewer
            product={product}
            images={images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
          <button onClick={() => handleImageChange('next')}>
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
