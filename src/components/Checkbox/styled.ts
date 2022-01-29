import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { CheckboxColorsSet } from './types';

interface CheckboxHandleProps {
  disabled: boolean;
  size: string;
}

export const Handle = styled.div<CheckboxHandleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  width: ${prop('size')};
  min-width: ${prop('size')};
  height: ${prop('size')};
  min-height: ${prop('size')};
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  user-select: none;
`;

interface CheckboxContainerProps {
  size: string;
  colors: CheckboxColorsSet;
}

export const Container = styled.label<CheckboxContainerProps>`
  display: inline-flex;
  line-height: ${prop('size')};
  color: inherit;
  ${Handle} {
    border-color: ${prop('colors.border')};
    background-color: ${prop('colors.background')};
    color: ${prop('colors.icon')};
  }
  &:hover {
    ${Handle} {
      border-color: ${prop('colors.hover.border', prop('colors.border'))};
      background-color: ${prop(
        'colors.hover.background',
        prop('colors.background')
      )};
      color: ${prop('colors.hover.icon', prop('colors.icon'))};
    }
  }
`;

export const Label = styled.span`
  margin-left: 10px;
`;
