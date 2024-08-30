import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from '@shared/lib/helpers/classNames/classNames';

type ButtonTypes = 'cancel' | 'confirm';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonType?: ButtonTypes;
}
export const Button: FC<ButtonProps> = ({
  children,
  className,
  buttonType = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames([styles.button, className], {
        [styles[buttonType]]: !!buttonType,
      })}
    >
      {children}
    </button>
  );
};
