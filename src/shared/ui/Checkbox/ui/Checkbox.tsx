import { FC } from 'react';
import { CheckboxCheckedIcon } from '@shared/assets/icons/CheckboxCheckedIcon';
import { CheckboxIcon } from '@shared/assets/icons/CheckboxIcon';

interface CheckboxProps {
  isChecked: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({ isChecked }) => {
  return <>{isChecked ? <CheckboxCheckedIcon /> : <CheckboxIcon />}</>;
};
