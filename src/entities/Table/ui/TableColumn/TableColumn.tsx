import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './TableColumn.module.scss';
import { classNames } from '@shared/lib/helpers/classNames/classNames';

export const TableColumn: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div className={classNames([styles.column, className])} {...props}>
      {children}
    </div>
  );
};
