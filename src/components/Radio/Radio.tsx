import React from 'react';
import ToggleControl from '../ToggleControl';
import { ToggleState } from '../ToggleControl/types';
import { Container, Handle, Label, Toggle } from './styled';
import { defaultColors } from './theme';
import { RadioProps } from './types';

function Radio({
  checked,
  className,
  label,
  disabled,
  toggleSize = '12px',
  handleSize = '20px',
  colors = defaultColors,
  type = 'radio',
  ...props
}: RadioProps) {
  const currentColors =
    colors[
      disabled
        ? ToggleState.disabled
        : checked
        ? ToggleState.on
        : ToggleState.off
    ];

  return (
    <Container colors={currentColors} size={handleSize}>
      <ToggleControl
        checked={checked}
        disabled={disabled}
        type={type}
        {...props}
      />
      <Handle className={className} size={handleSize} disabled={disabled}>
        <Toggle size={toggleSize} />
      </Handle>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

export default Radio;
