import { useLoadItemsOnScroll } from '../lib/hooks/useLoadItemsOnScroll';

export const LoadItemsOnScroll = () => {
  const ref = useLoadItemsOnScroll<HTMLDivElement>();
  return <div ref={ref} />;
};
