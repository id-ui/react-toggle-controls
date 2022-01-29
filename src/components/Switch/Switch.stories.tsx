import React, { useCallback, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Switch from './Switch';
import { defaultColors } from './theme';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
    },
    onChange: { action: 'onChange', description: 'onChange(checked)' },
    value: { control: 'text', description: 'switch value' },
    toggleSize: {
      control: 'text',
      description: 'switch toggle size',
      defaultValue: '22px',
      table: { defaultValue: { summary: '22px' } },
    },
    handleSize: {
      control: 'array',
      description: 'switch handle size [width, height]',
      defaultValue: ['36px', '16px'],
      table: { defaultValue: { summary: "['36px', '16px']" } },
    },
    colors: {
      control: 'object',
      description: 'switch colors theme for on/off/disabled states',
      defaultValue: defaultColors,
      table: { defaultValue: { summary: JSON.stringify(defaultColors) } },
    },
    icons: {
      control: 'object',
      description:
        'switch icons for on/off states ({ on: iconOn, off: iconOff })',
    },
    label: { control: 'text' },
    className: { control: 'text' },
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
} as ComponentMeta<typeof Switch>;

export const Playground: ComponentStory<typeof Switch> = ({
  checked,
  onChange,
  ...props
}) => {
  const [isOn, setOn] = useState(checked);

  useCallback(() => {
    setOn(checked);
  }, [checked]);

  const handleChange = useCallback(
    (value) => {
      setOn(value);
      onChange(value);
    },
    [onChange]
  );

  return <Switch {...props} checked={isOn} onChange={handleChange} />;
};
