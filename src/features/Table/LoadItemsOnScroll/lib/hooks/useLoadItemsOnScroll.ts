import { useRef, useState, useEffect, useCallback } from 'react';
import { useLoadItems } from './useLoadItems';
import { useSelector } from 'react-redux';
import { getIsAllItemsLoaded, getTableState } from '@entities/Table';

export const useLoadItemsOnScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const isAllItemsLoaded = useSelector(getIsAllItemsLoaded);
  const tableItemsLength = useSelector(getTableState).table.length;

  const loadItems = useLoadItems();

  const checkPos = useCallback(() => {
    if (!ref.current || isScrolledDown || isAllItemsLoaded) return;
    const { top } = ref.current.getBoundingClientRect();
    const loadingPoint = top / 4 < 300;
    if (loadingPoint) {
      setIsScrolledDown(true);
    }
  }, [isAllItemsLoaded, isScrolledDown]);

  useEffect(() => {
    checkPos();
  }, [tableItemsLength, checkPos]);

  useEffect(() => {
    document.addEventListener('scroll', checkPos);
    if (isScrolledDown) {
      loadItems();
      setIsScrolledDown(false);
    }
    if (isAllItemsLoaded) document.removeEventListener('scroll', checkPos);
    return () => {
      document.removeEventListener('scroll', checkPos);
    };
  }, [isScrolledDown, loadItems, checkPos, isAllItemsLoaded]);
  return ref;
};
