import { DetailedHTMLProps, forwardRef } from 'react';
import styles from './ContainerWrapper.module.scss';
import { classNames } from '@shared/lib/helpers/classNames/classNames';

type ContainerWrapperProps = Omit<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
>;

export const ContainerWrapper = forwardRef<
  HTMLDivElement,
  ContainerWrapperProps
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={classNames([styles.wrapper, className])}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});
