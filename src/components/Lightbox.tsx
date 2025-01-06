import { useRef, useEffect } from 'react';
import styles from './Lightbox.module.css';
import ImageViewer from './ImageViewer';
import { Product } from '../types/product';

type LightBoxProps = {
  open: boolean;
  closeLightBox: () => void;
  product: Product;
};

export default function LightBox({
  open,
  closeLightBox,
  product,
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
        <ImageViewer product={product} />
      </div>
    </dialog>
  );
}
