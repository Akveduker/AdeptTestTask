import { memo } from 'react';
import styles from './TableItem.module.scss';
import { classNames } from '@shared/lib/helpers/classNames/classNames';
import {
  switchChekedAction,
  TableColumn,
  TableItem,
  TableRow,
} from '@entities/Table';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch';
import { EditableText } from '@features/Table/EditableText';
import { TableCheckbox } from '@features/Table/TableCheckbox';

export const TableItemComponent = memo(
  ({
    isChecked,
    name,
    address,
    id,
    isEmpty,
  }: TableItem & { isEmpty?: boolean }) => {
    const dispatch = useAppDispatch();
    const onClick = () => {
      dispatch(switchChekedAction({ itemId: id }));
    };
    if (isEmpty) return <TableRow className={styles.rowEmpty} />;
    return (
      <TableRow
        className={classNames([], {
          [styles.checked]: isChecked,
        })}
      >
        <TableColumn className={styles.checkbox} onClick={onClick}>
          <TableCheckbox isChecked={isChecked} />
        </TableColumn>
        <TableColumn>
          <EditableText editingKey={'name'} text={name} itemId={id} />
        </TableColumn>
        <TableColumn>
          <EditableText editingKey={'address'} text={address} itemId={id} />
        </TableColumn>
      </TableRow>
    );
  }
);
