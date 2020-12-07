import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input } from './styled';

function ToggleControl({ onChange, checked, disabled, ...inputProps }) {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.checked);
    },
    [onChange]
  );

  return (
    <Input
      checked={checked}
      onChange={handleChange}
      disabled={disabled}
      {...inputProps}
    />
  );
}

ToggleControl.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  required: PropTypes.bool,
};

ToggleControl.defaultProps = {
  type: 'checkbox',
  onChange: () => {},
  disabled: false,
  required: false,
  checked: false,
};

export default ToggleControl;
