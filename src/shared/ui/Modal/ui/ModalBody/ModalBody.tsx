import { FC, PropsWithChildren, useEffect } from 'react';
import { useClickOutside } from '../../lib/hooks/useClickOutside';
import styles from './ModalBody.module.scss';
import { createPortal } from 'react-dom';
import { useAppContext } from '@shared/lib/hooks/useAppContext/useAppContext';
import { ModalContext } from '../../lib/context/ModalContext';

export const ModalBody: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, closeModal } = useAppContext(ModalContext);
  const ref = useClickOutside();
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isOpen]);
  if (isOpen) {
    return createPortal(
      <div className={styles.modal}>
        <div className={styles.body} ref={ref}>
          <button className={styles.cross} type="button" onClick={closeModal}>
            x
          </button>
          {children}
        </div>
      </div>,
      document.getElementById('portal') as HTMLElement
    );
  }
  return null;
};
