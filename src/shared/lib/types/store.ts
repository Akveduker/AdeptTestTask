import { store } from '@app/providers/StoreProvider';

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
