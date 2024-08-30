import { useAppContext } from '@shared/lib/hooks/useAppContext/useAppContext';
import { useEffect, useRef } from 'react';
import { ModalContext } from '../context/ModalContext';

export const useClickOutside = () => {
  const { closeModal, isOpen } = useAppContext(ModalContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement))
        closeModal();
    };
    const clickEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.addEventListener('mousedown', clickOutside);
      document.addEventListener('keydown', clickEscape);
    }
    return () => {
      document.removeEventListener('mousedown', clickOutside);
      document.removeEventListener('keydown', clickEscape);
    };
  }, [ref, isOpen, closeModal]);

  return ref;
};
