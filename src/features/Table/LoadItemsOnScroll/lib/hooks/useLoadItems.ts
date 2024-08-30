import { getIsAllItemsLoaded, loadItemsAction } from '@entities/Table';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export const useLoadItems = () => {
  const dispatch = useAppDispatch();
  const isAllItemsLoaded = useSelector(getIsAllItemsLoaded);
  const loadItems = useCallback(() => {
    if (!isAllItemsLoaded) {
      dispatch(loadItemsAction());
    }
  }, [isAllItemsLoaded, dispatch]);

  return loadItems;
};
