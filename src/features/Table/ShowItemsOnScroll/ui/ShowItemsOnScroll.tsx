import { FC, useEffect, useRef } from 'react';

interface ShowItemsOnScrollProps {
  setPos: () => void;
}
export const ShowItemsOnScroll: FC<ShowItemsOnScrollProps> = ({ setPos }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    const checkScrollPos = () => {
      if (!ref.current) return;
      const { bottom } = ref.current.getBoundingClientRect();
      if (bottom / 4 < 300) {
        setPos();
      }
    };
    document.addEventListener('scroll', checkScrollPos);
    return () => {
      document.removeEventListener('scroll', checkScrollPos);
    };
  }, [setPos]);

  return <div ref={ref} />;
};
