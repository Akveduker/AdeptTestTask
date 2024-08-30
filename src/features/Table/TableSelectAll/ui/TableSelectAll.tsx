import { Checkbox } from '@shared/ui/Checkbox';
import styles from './TableSelectAll.module.scss';
import { getIsAllChecked } from '@entities/Table';
import { useSelector } from 'react-redux';

export const TableSelectAll = () => {
  const isAllChecked = useSelector(getIsAllChecked);

  return (
    <div className={styles.container}>
      <Checkbox isChecked={isAllChecked} />
    </div>
  );
};
