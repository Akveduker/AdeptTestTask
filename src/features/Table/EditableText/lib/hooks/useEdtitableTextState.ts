import { changeTextAction, TableEditingKeys } from '@entities/Table';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';

export const useEdtitableTextState = (
  text: string,
  itemId: number,
  editingKey: TableEditingKeys
) => {
  const [value, setValue] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const editingOn = () => {
    setIsEditing(true);
  };
  const editingOff = () => {
    setIsEditing(false);
    dispatch(changeTextAction({ itemId, text: value, editingKey }));
  };

  const closeOnEscape = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      editingOff();
    }
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editingOff();
  };
  return {
    value,
    isEditing,
    closeOnEscape,
    onSubmit,
    editingOn,
    onChange,
    editingOff,
  };
};
