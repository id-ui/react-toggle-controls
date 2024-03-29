import React, { useCallback, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from './Radio';
import { defaultColors } from './theme';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
    },
    onChange: { action: 'onChange', description: 'onChange(checked)' },
    value: { control: 'text', description: 'radio value' },
    toggleSize: {
      control: 'text',
      description: 'radio toggle size',
      defaultValue: '12px',
      table: { defaultValue: { summary: '12px' } },
    },
    handleSize: {
      control: 'text',
      description: 'radio handle size',
      defaultValue: '20px',
      table: { defaultValue: { summary: '20px' } },
    },
    colors: {
      control: 'object',
      description: 'radio colors theme for on/off/disabled states',
      defaultValue: defaultColors,
      table: { defaultValue: { summary: JSON.stringify(defaultColors) } },
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
      defaultValue: 'radio',
      table: { defaultValue: { summary: 'radio' } },
    },
    name: { control: 'text' },
    id: { control: 'text' },
  },
} as ComponentMeta<typeof Radio>;

export const Playground: ComponentStory<typeof Radio> = ({
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

  return <Radio {...props} checked={isOn} onChange={handleChange} />;
};
