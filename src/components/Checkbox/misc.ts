import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  onChangeChecked: (checked: boolean) => void;
}
