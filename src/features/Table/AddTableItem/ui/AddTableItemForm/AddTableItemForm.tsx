import { Input } from '@shared/ui/Input';
import styles from './AddTableItemForm.module.scss';
import { Button } from '@shared/ui/Button';
import { TextError } from '@shared/ui/TextError';
import { classNames } from '@shared/lib/helpers/classNames/classNames';
import { useTableItemFormState } from '../../lib/hooks/useTableItemFormState';

export const AddTableItemForm = () => {
  const { setAddress, setName, onSubmit, isItemCreated, tableItem } =
    useTableItemFormState();
  const { name, address } = tableItem;

  return (
    <div className={styles.container}>
      {!isItemCreated ? (
        <form onSubmit={onSubmit} className={styles.form}>
          <h3 className={styles.title}>Добавить компанию</h3>
          <div className={styles.block}>
            <label>
              <h4 className={styles.blockTitle}>Название компании</h4>
              <Input
                value={name.value}
                onChange={setName}
                className={classNames([], {
                  [styles.inputError]: name.error.isError,
                })}
              />
              {name.error.isError && (
                <div className={styles.error}>
                  <TextError>{name.error.errorMessage}</TextError>
                </div>
              )}
            </label>
          </div>
          <div className={styles.block}>
            <label>
              <h4 className={styles.blockTitle}>Адрес компании</h4>
              <Input
                value={address.value}
                onChange={setAddress}
                className={classNames([], {
                  [styles.inputError]: address.error.isError,
                })}
              />
              {address.error.isError && (
                <div className={styles.error}>
                  <TextError>{address.error.errorMessage}</TextError>
                </div>
              )}
            </label>
          </div>
          <Button buttonType="confirm" className={styles.button}>
            Добавить
          </Button>
        </form>
      ) : (
        <h3 className={styles.addedTitle}>Компания добавлена</h3>
      )}
    </div>
  );
};
