import { AppRootState } from '@shared/lib/types/store';

export const getIsAllItemsLoaded = (state: AppRootState) =>
  state.table.isAllItemsLoaded;
