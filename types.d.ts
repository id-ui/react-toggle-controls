import * as React from 'react';

export interface ToggleProps {
    /**
     * input name
     */
    name?: string;
    /**
     * input id
     */
    id?: string;
    /**
     * input value
     */
    value?: any;
    /**
     * is checked
     * @default false
     */
    checked?: boolean;
    /**
     * onaChange event handler
     */
    onChange?: (value: boolean) => void;
    /**
     * whether input disabled or not
     * @default false
     */
    disabled?: boolean;
    /**
     * input type
     * @default checkbox
     */
    type?: string;
    /**
     * whether value required or not
     * @default false
     */
    required?: boolean;
}

export default class ToggleControl extends React.Component<ToggleProps> {}

interface CheckboxColorsSet {
    background?: string;
    border?: string;
    icon?: string;
    hover?: {
        background?: string;
        border?: string;
        icon?: string;
    };
}

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
    colors?: {
        on?: CheckboxColorsSet,
        off?: CheckboxColorsSet,
        disabled?: CheckboxColorsSet,
    };
    /**
     * checkbox size
     * @default 20px
     */
    size?: string;
}

export class Checkbox extends React.Component<CheckboxProps> {}

interface RadioColorsSet {
    border?: string;
    toggle?: string;
    hover?: {
        border?: string;
        toggle?: string;
    };
}

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
    colors?: {
        on?: RadioColorsSet,
        off?: RadioColorsSet,
        disabled?: RadioColorsSet,
    };
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

export class Radio extends React.Component<RadioProps> {}

interface SwitchColorsSet {
    border?: string;
    toggle?: string;
    icon?: string;
}

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
        on?: React.ReactNode;
        off?: React.ReactNode;
    };
    /**
     * switch colors theme for different states
     */
    colors?: {
        on?: SwitchColorsSet,
        off?: SwitchColorsSet,
        disabled?: SwitchColorsSet,
    };
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

export class Switch extends React.Component<SwitchProps> {}