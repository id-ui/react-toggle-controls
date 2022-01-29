import React from 'react';
import ToggleControl from '../ToggleControl';
import { ToggleState } from '../ToggleControl';
import { Container, Handle, Label } from './styled';
import { defaultColors } from './theme';
import CheckIcon from './CheckIcon';
import { CheckboxProps } from './types';

function Checkbox({
  checked,
  className,
  label,
  disabled,
  icon = <CheckIcon />,
  colors = defaultColors,
  size = '20px',
  ...props
}: CheckboxProps) {
  const currentColors =
    colors[
      disabled
        ? ToggleState.disabled
        : checked
        ? ToggleState.on
        : ToggleState.off
    ];

  return (
    <Container className={className} size={size} colors={currentColors}>
      <ToggleControl checked={checked} disabled={disabled} {...props} />
      <Handle size={size} disabled={disabled}>
        {icon}
      </Handle>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

export default Checkbox;
