import * as React from 'react';
import { ToggleProps, ToggleState } from '../ToggleControl';

export enum CheckboxThemedElements {
  background = 'background',
  border = 'border',
  icon = 'icon',
}

export type CheckboxColorsSet = { [key in CheckboxThemedElements]?: string } & {
  hover?: { [key in CheckboxThemedElements]?: string };
};

export type CheckboxColors = {
  [key in ToggleState]?: CheckboxColorsSet;
};

export interface CheckboxProps extends ToggleProps {
  /**
   * checkbox container className
   */
  className?: string;
  /**
   * input label
   */
  label?: string;
  /**
   * check icon
   */
  icon?: React.ReactNode;
  /**
   * checkbox colors theme for different states
   */
  colors?: CheckboxColors;
  /**
   * checkbox size
   * @default 20px
   */
  size?: string;
}
