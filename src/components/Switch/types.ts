import * as React from 'react';
import { ToggleProps, ToggleState } from '../ToggleControl';

export enum SwitchThemedElements {
  handle = 'handle',
  toggle = 'toggle',
  icon = 'icon',
}

export type SwitchColorsSet = {
  [key in SwitchThemedElements]?: string;
};

export type SwitchColors = {
  [key in ToggleState]?: SwitchColorsSet;
};

export interface SwitchProps extends ToggleProps {
  /**
   * container className
   */
  className?: string;
  /**
   * input label
   */
  label?: string;
  /**
   * switch icons for different states
   */
  icons?: {
    [key in ToggleState]?: React.ReactNode;
  };
  /**
   * switch colors theme for different states
   */
  colors?: SwitchColors;
  /**
   * switch handle size [width, height]
   * @default ['36px', '16px']
   */
  handleSize?: [width: string, height: string];
  /**
   * switch toggle size
   * @default 22px
   */
  toggleSize?: string;
}
