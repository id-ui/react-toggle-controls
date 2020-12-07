# React Toggle Controls

[![NPM](https://img.shields.io/npm/v/@kaprisa57/react-toggle-controls/.svg)](https://www.npmjs.com/package/@kaprisa57/react-toggle-controls/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Coverage Status](https://coveralls.io/repos/github/kseniya57/react-toggle-controls/badge.svg?branch=main)](https://coveralls.io/github/kseniya57/react-toggle-controls?branch=main)

## Install

```bash
npm install --save @kaprisa57/react-toggle-controls
```

```bash
yarn add @kaprisa57/react-toggle-controls
```

## Checkbox

- [Props](https://kseniya57.github.io/react-toggle-controls/?path=/docs/checkbox--playground)
- [Playground](https://kseniya57.github.io/react-toggle-controls/?path=/story/checkbox--playground)

```jsx
import React, { useState } from 'react'
import { Checkbox } from '@kaprisa57/react-toggle-controls'

function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return <Checkbox 
    checked={checked} 
    onChange={setChecked}
    size="20px"
    label="Check"
    icon={<span>{'✓'}</span>}
    colors={{ 
        on: { background: '#37D2C5', border: '#37D2C5', icon: '#FFFFFF' }, 
        off: { background: 'transparent', border: '#CCCCCC', icon: 'transparent' }, 
        disabled: { background: '#F5F5F5', border: '#D9D9D9', icon: '#D9D9D9' }
    }}
  />
}
```

## Radio

- [Props](https://kseniya57.github.io/react-toggle-controls/?path=/docs/radio--playground)
- [Playground](https://kseniya57.github.io/react-toggle-controls/?path=/story/radio--playground)

```jsx
import React, { useState } from 'react'
import { Radio } from '@kaprisa57/react-toggle-controls'

function RadioExample() {
  const [checked, setChecked] = useState(false);

  return <Radio 
    checked={checked} 
    onChange={setChecked}
    handleSize="20px"
    toggleSize="12px"
    label="Check"
    colors={{ 
        on: { toggle: '#37D2C5', border: '#37D2C5' }, 
        off: { toggle: 'transparent', border: '#37D2C5' }, 
        disabled: { toggle: '#D9D9D9', border: '#D9D9D9' }
    }}
  />
}
```

## Switch

- [Props](https://kseniya57.github.io/react-toggle-controls/?path=/docs/switch--playground)
- [Playground](https://kseniya57.github.io/react-toggle-controls/?path=/story/switch--playground)

```jsx
import React, { useState } from 'react'
import { Switch } from '@kaprisa57/react-toggle-controls'

function SwitchExample() {
  const [checked, setChecked] = useState(false);

  return <Switch 
    checked={checked} 
    onChange={setChecked}
    handleSize={['36px', '16px']}
    toggleSize="22px"
    label="Check"
    colors={{ 
        on: { toggle: '#37D2C5', handle: '#37D2C5', icon: '#FFFFFF' }, 
        off: { toggle: '#FFFFFF', handle: '#CCCCCC', icon: '#CCCCCC' }, 
        disabled: { toggle: '#F5F5F5', handle: '#D9D9D9', icon: '#D9D9D9' }
    }}
    icons={{ on: <span>{'✓'}</span>, off: <span>{'✘'}</span> }}
  />
}
```

## Custom Toggle

```jsx
import React from 'react'
import ToggleControl from '@kaprisa57/react-toggle-controls'

function CustomToggle({ checked, disabled, label, onText, offText, className, ...props }) {
  return <label className={className} style={{ color: disabled ? 'gray' : 'black' }}>
    <ToggleControl checked={checked} disabled={disabled} {...props} />
    <span>{checked ? onText : offText}</span>
    {label && <span>{label}</span>}
  </label>
}

CustomToggle.propTypes = {
  ...ToggleControl.propTypes,
  className: PropTypes.string,
  label: PropTypes.string,
  onText: PropTypes.string,
  offText: PropTypes.string,
};

CustomToggle.defaultProps = {
  ...ToggleControl.defaultProps,
  onText: 'On',
  offText: 'Off'
};
```

## License

MIT © [kaprisa57@gmail.com](https://github.com/kaprisa57@gmail.com)