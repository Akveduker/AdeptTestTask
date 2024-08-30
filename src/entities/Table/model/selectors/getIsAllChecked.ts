import { AppRootState } from '@shared/lib/types/store';

export const getIsAllChecked = (state: AppRootState) =>
  state.table.isAllChecked;
