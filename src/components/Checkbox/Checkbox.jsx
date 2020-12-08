import React from 'react';
import PropTypes from 'prop-types';
import ToggleControl from 'components/ToggleControl';
import { Container, Handle, Label } from './styled';
import { colors } from './theme';
import CheckIcon from './CheckIcon';

function Checkbox({
  checked,
  className,
  label,
  disabled,
  icon,
  colors,
  size,
  ...props
}) {
  const currentColors = colors[disabled ? 'disabled' : checked ? 'on' : 'off'];

  return (
    <Container className={className} size={size} colors={currentColors}>
      <ToggleControl checked={checked} disabled={disabled} {...props} />
      <Handle size={size} disabled={disabled}>
        {checked && icon}
      </Handle>
      {label && <Label>{label}</Label>}
    </Container>
  );
}

const colorsSetShape = PropTypes.shape({
  background: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.string,
  hover: PropTypes.shape({
    background: PropTypes.string,
    border: PropTypes.string,
    icon: PropTypes.string,
  }),
});

Checkbox.propTypes = {
  ...ToggleControl.propTypes,
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.any,
  colors: PropTypes.shape({
    on: colorsSetShape,
    off: colorsSetShape,
    disabled: colorsSetShape,
  }),
  size: PropTypes.string,
};

Checkbox.defaultProps = {
  ...ToggleControl.defaultProps,
  colors,
  size: '20px',
  icon: <CheckIcon />,
};

export default Checkbox;
