import { Button } from '@shared/ui/Button';
import { Modal, useModalState } from '@shared/ui/Modal';
import { AddTableItemForm } from '../AddTableItemForm/AddTableItemForm';

export const AddTableItemButton = () => {
  const modalState = useModalState();
  const { openModal } = modalState;
  return (
    <div>
      <Button onClick={openModal} buttonType="confirm">
        Добавить компанию
      </Button>
      <Modal {...modalState}>
        <AddTableItemForm />
      </Modal>
    </div>
  );
};
