import React from 'react';
import PropTypes from 'prop-types';
import ToggleControl from 'components/ToggleControl';
import { Container, Handle, Toggle, Label } from './styled';
import { colors } from './theme';

function Radio({
  checked,
  className,
  label,
  disabled,
  toggleSize,
  handleSize,
  ...props
}) {
  const currentColors = colors[disabled ? 'disabled' : checked ? 'on' : 'off'];

  return (
    <Container colors={currentColors} size={handleSize}>
      <ToggleControl checked={checked} disabled={disabled} {...props} />
      <Handle className={className} size={handleSize} disabled={disabled}>
        <Toggle size={toggleSize} />
      </Handle>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

const colorsSetShape = PropTypes.shape({
  border: PropTypes.string,
  toggle: PropTypes.string,
  hover: PropTypes.shape({
    border: PropTypes.string,
    toggle: PropTypes.string,
  }),
});

Radio.propTypes = {
  ...ToggleControl.propTypes,
  className: PropTypes.string,
  label: PropTypes.string,
  colors: PropTypes.shape({
    on: colorsSetShape,
    off: colorsSetShape,
    disabled: colorsSetShape,
  }),
  handleSize: PropTypes.string,
  toggleSize: PropTypes.string,
};

Radio.defaultProps = {
  ...ToggleControl.defaultProps,
  type: 'radio',
  colors,
  handleSize: '20px',
  toggleSize: '12px',
};

export default Radio;
