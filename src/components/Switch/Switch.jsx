import React from 'react';
import PropTypes from 'prop-types';
import ToggleControl from 'components/ToggleControl';
import { Container, Handle, Label, Toggle } from './styled';
import { colors } from './theme';

function Switch({
  checked,
  onChange,
  className,
  label,
  disabled,
  colors,
  icons,
  toggleSize,
  handleSize,
  ...props
}) {
  const state = disabled ? 'disabled' : checked ? 'on' : 'off';
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
        color={currentColors.handle}
        disabled={disabled}
        size={handleSize}
      >
        <Toggle
          isOn={checked}
          color={currentColors.toggle}
          iconColor={currentColors.icon}
          size={toggleSize}
        >
          {icons && icons[checked ? 'on' : 'off']}
        </Toggle>
      </Handle>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

const colorsSetShape = PropTypes.shape({
  border: PropTypes.string,
  toggle: PropTypes.string,
  icon: PropTypes.string,
});

Switch.propTypes = {
  ...ToggleControl.propTypes,
  className: PropTypes.string,
  label: PropTypes.string,
  icons: PropTypes.shape({
    on: PropTypes.any,
    off: PropTypes.any,
  }),
  colors: PropTypes.shape({
    on: colorsSetShape,
    off: colorsSetShape,
    disabled: colorsSetShape,
  }),
  toggleSize: PropTypes.string,
  handleSize: PropTypes.arrayOf(PropTypes.string),
};

Switch.defaultProps = {
  colors,
  toggleSize: '22px',
  handleSize: ['36px', '16px'],
};

export default Switch;
