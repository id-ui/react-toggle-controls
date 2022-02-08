import React, { SyntheticEvent } from 'react';
import { noop } from './helpers';
import { Input } from './styled';
import { ToggleProps } from './types';

function ToggleControl({
  onChange = noop,
  type = 'checkbox',
  ...inputProps
}: ToggleProps) {
  const handleChange = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    onChange(e.currentTarget.checked);
  };

  return <Input onChange={handleChange} type={type} {...inputProps} />;
}

export default ToggleControl;
