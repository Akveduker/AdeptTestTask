import { TableReducer } from '@entities/Table';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    table: TableReducer,
  },
});
