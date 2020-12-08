import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Toggle = styled.div`
  width: ${prop('size')};
  height: ${prop('size')};
  border-radius: inherit;
  transition: background-color 0.3s ease-in-out;
  background-color: ${prop('colors.toggle')};
  &:hover {
    background-color: ${prop('colors.hover.toggle', prop('colors.toggle'))};
  }
`;

export const Handle = styled.div`
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
  border-color: ${prop('colors.border')};
  &:hover {
    border-color: ${prop('colors.hover.border', prop('colors.border'))};
  }
`;

export const Container = styled.label`
  display: inline-flex;
  line-height: ${prop('size')};
`;

export const Label = styled.div`
  margin-left: 10px;
`;
