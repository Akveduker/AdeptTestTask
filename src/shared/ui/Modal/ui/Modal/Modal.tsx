import { FC, PropsWithChildren } from 'react';
import { ModalCtx } from '../../model/types/modal';
import { ModalBody } from '../ModalBody/ModalBody';
import { ModalContext } from '../../lib/context/ModalContext';

export const Modal: FC<PropsWithChildren<ModalCtx>> = ({
  children,
  ...modalProps
}) => {
  return (
    <ModalContext.Provider value={modalProps}>
      <ModalBody>{children}</ModalBody>
    </ModalContext.Provider>
  );
};
