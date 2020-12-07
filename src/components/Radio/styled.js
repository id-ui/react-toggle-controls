import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Toggle = styled.div`
  width: ${prop('size')};
  height: ${prop('size')};
  border-radius: inherit;
  transition: background-color 0.3s ease-in-out;
  background-color: ${prop('color')};
`;

export const Handle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease-in-out;
  border-width: 0.2rem;
  border-style: solid;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  width: ${prop('size')};
  min-width: ${prop('size')};
  height: ${prop('size')};
  min-height: ${prop('size')};
  border-radius: 50%;
  border-color: ${prop('color')};
`;

export const Container = styled.label`
  display: inline-flex;
  line-height: ${prop('size')};
`;

export const Label = styled.div`
  margin-left: 1rem;
`;
