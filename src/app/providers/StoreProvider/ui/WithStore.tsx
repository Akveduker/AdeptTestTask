import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

export const WithStore: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
