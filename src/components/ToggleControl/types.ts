import { HTMLAttributes } from 'react';

export enum ToggleState {
  on = 'on',
  off = 'off',
  disabled = 'disabled',
}

export interface ToggleProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * onaChange event handler
   */
  onChange?: (value: boolean) => void;
  /**
   * input type
   * @default checkbox
   */
  type?: string;
  /**
   * is checked
   * @default false
   */
  checked?: boolean;
  /**
   * whether input disabled or not
   * @default false
   */
  disabled?: boolean;
  /**
   * whether value required or not
   * @default false
   */
  required?: boolean;
  /**
   * input name
   */
  name?: string;
  /**
   * input id
   */
  id?: string;
}
