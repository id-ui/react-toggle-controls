import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import ToggleControl from './ToggleControl';
import { ToggleProps } from './types';

export default {
  title: 'ToggleControl',
  component: ToggleControl,
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
    },
    onChange: { action: 'onChange', description: 'onChange(checked)' },
    value: { control: 'text', description: 'toggle value' },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
    },
    required: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
    },
    type: {
      control: 'text',
      description: 'control type',
      defaultValue: 'checkbox',
      table: { defaultValue: { summary: 'checkbox' } },
    },
    name: { control: 'text' },
    id: { control: 'text' },
  },
} as ComponentMeta<typeof ToggleControl>;

interface CustomToggleProps extends ToggleProps {
  label: string;
  onText: string;
  offText: string;
  className: string;
}

export const CustomToggle: Story<CustomToggleProps> = ({
  label,
  checked,
  disabled,
  onText,
  offText,
  className,
  ...props
}) => {
  return (
    <label className={className} style={{ color: disabled ? 'gray' : 'black' }}>
      <ToggleControl checked={checked} disabled={disabled} {...props} />
      <span>{checked ? onText : offText}</span>
      {label && <span>{label}</span>}
    </label>
  );
};
