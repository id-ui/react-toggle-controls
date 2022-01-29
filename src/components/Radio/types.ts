import { ToggleProps, ToggleState } from '../ToggleControl';

export enum RadioThemedElements {
  border = 'border',
  toggle = 'toggle',
}

export type RadioColorsSet = { [key in RadioThemedElements]?: string } & {
  hover?: { [key in RadioThemedElements]?: string };
};

export type RadioColors = {
  [key in ToggleState]?: RadioColorsSet;
};

export interface RadioProps extends ToggleProps {
  /**
   * container className
   */
  className?: string;
  /**
   * input label
   */
  label?: string;
  /**
   * radio colors theme for different states
   */
  colors?: RadioColors;
  /**
   * radio handle size
   * @default 20px
   */
  handleSize?: string;
  /**
   * radio toggle size
   * @default 12px
   */
  toggleSize?: string;
}
