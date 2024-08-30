import { createContext } from 'react';
import { ModalCtx } from '../../model/types/modal';

export const ModalContext = createContext<ModalCtx>(null);
