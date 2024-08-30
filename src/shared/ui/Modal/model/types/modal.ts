import { NullableCtx } from '@shared/lib/types/context';

export type ModalCtx = NullableCtx<{
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}>;
