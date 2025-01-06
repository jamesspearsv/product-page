import { useRef, useEffect } from 'react';
import styles from './Lightbox.module.css';
import { Product } from '../types/product';
import ImageViewer from './ImageViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faChevronLeft,
  faChevronRight,
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

  return (
    <dialog ref={modalRef} className={styles.lightbox}>
      <div>
        <div className={styles.closeContainer}>
          <button onClick={closeLightBox} className={styles.closeButton}>
            <FontAwesomeIcon className={styles.closeIcon} icon={faClose} />
          </button>
        </div>
        <div className={styles.viewerContainer}>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <ImageViewer
            product={product}
            images={images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </dialog>
  );
}
