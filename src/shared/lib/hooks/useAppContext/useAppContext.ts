import { Context, useContext } from 'react';

export const useAppContext = <T>(context: Context<T>) => {
  const ctx = useContext(context);
  if (!ctx) {
    throw new Error('context must be used within provider');
  }
  return ctx;
};
