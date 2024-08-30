import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import { classNames } from '@shared/lib/helpers/classNames/classNames';

export const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      type="text"
      {...props}
      ref={ref}
      className={classNames([className, styles.input])}
    />
  );
});
