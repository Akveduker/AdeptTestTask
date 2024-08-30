export type FromValData = {
  value: string;
  error: FormValError;
};
export type FormValError =
  | { isError: false }
  | { isError: true; errorMessage: string };

export type FormValObj<T extends object> = Record<keyof T, FromValData>;
