import styles from './TableHeader.module.scss';
import { checkAllAction, TableColumn, TableRow } from '@entities/Table';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@shared/lib/helpers/classNames/classNames';
import { TableSelectAll } from '@features/Table/TableSelectAll';
import { useEffect, useRef, useState } from 'react';
import { ContainerWrapper } from '@shared/ui/ContainerWrapper';
import { DeleteItem } from '@features/Table/DeleteItem';
import { AddTableItemButton } from '@features/Table/AddTableItem';

export const TableHeader = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(checkAllAction());
  };
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (!ref.current) return;
      const { bottom } = ref.current.getBoundingClientRect();
      if (bottom < 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    });
  }, [isHeaderFixed]);
  return (
    <div ref={ref}>
      <ContainerWrapper
        className={classNames([], {
          [styles.fixed]: isHeaderFixed,
        })}
      >
        <TableRow
          className={classNames([styles.row], {
            [styles.rowFixed]: isHeaderFixed,
          })}
        >
          <TableColumn className={styles.checkbox} onClick={onClick}>
            <TableSelectAll />
          </TableColumn>
          <TableColumn>Название компании</TableColumn>
          <TableColumn>Адрес</TableColumn>
          <div className={styles.buttons}>
            <div className={styles.addButton}>
              <AddTableItemButton />
            </div>
            <DeleteItem />
          </div>
        </TableRow>
      </ContainerWrapper>
    </div>
  );
};
