import React from 'react';
import ToggleControl from '../ToggleControl';
import { ToggleState } from '../ToggleControl/types';
import { Container, Handle, Label, Toggle } from './styled';
import { defaultColors } from './theme';
import { SwitchThemedElements, SwitchProps } from './types';

function Switch({
  checked,
  onChange,
  className,
  label,
  disabled,
  colors = defaultColors,
  icons,
  toggleSize = '22px',
  handleSize = ['36px', '16px'],
  ...props
}: SwitchProps) {
  const state = disabled
    ? ToggleState.disabled
    : checked
    ? ToggleState.on
    : ToggleState.off;
  const currentColors = colors[state];

  return (
    <Container className={className} size={handleSize[1]}>
      <ToggleControl
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <Handle
        color={currentColors[SwitchThemedElements.handle]}
        disabled={disabled}
        size={handleSize}
      >
        <Toggle
          isOn={checked}
          color={currentColors[SwitchThemedElements.toggle]}
          iconColor={currentColors[SwitchThemedElements.icon]}
          size={toggleSize}
        >
          {icons && icons[checked ? ToggleState.on : ToggleState.off]}
        </Toggle>
      </Handle>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

export default Switch;
