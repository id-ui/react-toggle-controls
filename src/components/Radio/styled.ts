import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { RadioColorsSet } from './types';

interface RadioToggleProps {
  size: string;
}

export const Toggle = styled.div<RadioToggleProps>`
  width: ${prop('size')};
  height: ${prop('size')};
  border-radius: inherit;
  transition: background-color 0.3s ease-in-out;
`;

interface RadioHandleProps {
  disabled: boolean;
  size: string;
}

export const Handle = styled.div<RadioHandleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease-in-out;
  border-width: 2px;
  border-style: solid;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  width: ${prop('size')};
  min-width: ${prop('size')};
  height: ${prop('size')};
  min-height: ${prop('size')};
  border-radius: 50%;
`;

interface RadioContainerProps {
  size: string;
  colors: RadioColorsSet;
}

export const Container = styled.label<RadioContainerProps>`
  display: inline-flex;
  line-height: ${prop('size')};
  ${Handle} {
    border-color: ${prop('colors.border')};
  }
  ${Toggle} {
    background-color: ${prop('colors.toggle')};
  }
  &:hover {
    ${Handle} {
      border-color: ${prop('colors.hover.border', prop('colors.border'))};
    }
    ${Toggle} {
      background-color: ${prop('colors.hover.toggle', prop('colors.toggle'))};
    }
  }
`;

export const Label = styled.div`
  margin-left: 10px;
`;
