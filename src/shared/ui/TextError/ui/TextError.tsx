import { FC, PropsWithChildren } from 'react';
import styles from './TextError.module.scss';
import { classNames } from '@shared/lib/helpers/classNames/classNames';

export const TextError: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames([styles.error, className])}>{children}</div>
  );
};
