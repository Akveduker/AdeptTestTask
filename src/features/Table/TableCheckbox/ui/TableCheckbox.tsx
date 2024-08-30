import { Checkbox } from '@shared/ui/Checkbox';
import styles from './TableCheckbox.module.scss';
import { FC } from 'react';

interface TableCheckboxProps {
  isChecked: boolean;
}

export const TableCheckbox: FC<TableCheckboxProps> = ({ isChecked }) => {
  return (
    <div className={styles.container}>
      <Checkbox isChecked={isChecked} />
    </div>
  );
};
