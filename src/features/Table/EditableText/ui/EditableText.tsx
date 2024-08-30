import { FC } from 'react';
import styles from './EditableText.module.scss';
import { Input } from '@shared/ui/Input';
import { useEdtitableTextState } from '../lib/hooks/useEdtitableTextState';
import { TableEditingKeys } from '@entities/Table';

interface EditableTextProps {
  text: string;
  itemId: number;
  editingKey: TableEditingKeys;
}

export const EditableText: FC<EditableTextProps> = ({
  text,
  itemId,
  editingKey,
}) => {
  const {
    isEditing,
    onChange,
    onSubmit,
    editingOn,
    editingOff,
    value,
    closeOnEscape,
  } = useEdtitableTextState(text, itemId, editingKey);
  return (
    <div className={styles.container}>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <Input
            value={value}
            onBlur={editingOff}
            onChange={onChange}
            autoFocus
            onKeyDown={closeOnEscape}
            className={styles.input}
          />
        </form>
      ) : (
        <button type="button" className={styles.button} onClick={editingOn}>
          {value}
        </button>
      )}
    </div>
  );
};
