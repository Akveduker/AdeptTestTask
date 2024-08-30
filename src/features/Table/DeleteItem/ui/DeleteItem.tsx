import { deletItemsAction } from '@entities/Table';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@shared/ui/Button';

export const DeleteItem = () => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(deletItemsAction());
  };
  return (
    <div>
      <Button buttonType="cancel" onClick={onClick}>
        Удалить
      </Button>
    </div>
  );
};
