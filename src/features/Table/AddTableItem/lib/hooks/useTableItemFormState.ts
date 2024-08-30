import { setTableItemAction } from '@entities/Table';
import { checkLength } from '@shared/lib/helpers/checkLength/checkLength';
import { useAppContext } from '@shared/lib/hooks/useAppContext/useAppContext';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ModalContext } from '@shared/ui/Modal';
import { useState, FormEvent, ChangeEvent } from 'react';
import { TableItemFormValObj } from '../../model/types/form';

export const useTableItemFormState = () => {
  const dispatch = useAppDispatch();
  const { closeModal } = useAppContext(ModalContext);
  const [isItemCreated, setIsItemCreated] = useState(false);
  const [tableItem, setTableItem] = useState<TableItemFormValObj>({
    name: {
      value: '',
      error: { isError: false },
    },
    address: {
      value: '',
      error: { isError: false },
    },
  });

  const setTableItemValue = (key: keyof TableItemFormValObj, value: string) => {
    setTableItem((state) => ({ ...state, [key]: { ...state[key], value } }));
  };
  const setTableItemError = (
    key: keyof TableItemFormValObj,
    errorMessage: string
  ) => {
    setTableItem((state) => ({
      ...state,
      [key]: { ...state[key], error: { isError: true, errorMessage } },
    }));
  };

  const setName = (e: ChangeEvent<HTMLInputElement>) => {
    setTableItemValue('name', e.target.value);
  };
  const setAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setTableItemValue('address', e.target.value);
  };

  const validate = () => {
    let key: keyof TableItemFormValObj;
    let isError = false;
    for (key in tableItem) {
      const item = tableItem[key];
      const validationRes = checkLength(item.value, 3);
      if (!validationRes) {
        setTableItemError(key, 'Введите больше 3 символов');
        if (!isError) isError = true;
      }
    }

    return isError;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isError = validate();
    if (isError) return;
    dispatch(
      setTableItemAction({
        name: tableItem.name.value,
        address: tableItem.address.value,
      })
    );
    setIsItemCreated(true);
    setTimeout(() => {
      closeModal();
    }, 750);
  };
  return {
    tableItem,
    isItemCreated,
    setName,
    setAddress,
    onSubmit,
  };
};
