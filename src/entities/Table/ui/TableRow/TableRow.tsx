import { classNames } from '@shared/lib/helpers/classNames/classNames';
import styles from './TableRow.module.scss';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export const TableRow: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div className={classNames([styles.row, className])} {...props}>
      {children}
    </div>
  );
};
