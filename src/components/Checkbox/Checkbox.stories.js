import React, { useCallback, useState } from 'react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import Checkbox from './Checkbox';
import { colors } from './theme';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: false,
      table: { defaultValue: { summary: false } },
    },
    onChange: { action: 'onChange', description: 'onChange(checked)' },
    value: { control: 'text', description: 'checkbox value' },
    size: {
      control: 'text',
      description: 'checkbox size',
      defaultValue: '20px',
      table: { defaultValue: { summary: '20px' } },
    },
    icon: {
      description: 'checkbox icon',
      disable: true,
      table: { defaultValue: { summary: '<CheckIcon />' } },
    },
    colors: {
      control: 'object',
      description: 'checkbox colors theme for on/off/disabled states',
      defaultValue: colors,
      table: { defaultValue: { summary: JSON.stringify(colors) } },
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
  decorators: [withPropsTable],
  parameters: {
    props: {
      propTablesInclude: [Checkbox],
    },
  },
};

export function Playground({ checked, onChange, ...props }) {
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

  return <Checkbox {...props} checked={isOn} onChange={handleChange} />;
}
