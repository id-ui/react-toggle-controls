import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

interface SwitchToggleProps {
  isOn: boolean;
  size: string;
  color: string;
  iconColor: string;
}

export const Toggle = styled.div<SwitchToggleProps>`
  position: absolute;
  top: 50%;
  transition: all 0.3s ease-in-out;
  ${ifProp(
    'isOn',
    css`
      left: 100%;
      transform: translate(-100%, -50%);
    `,
    css`
      left: 0;
      transform: translate(0, -50%);
    `
  )};

  width: ${prop('size')};
  height: ${prop('size')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: ${prop('color')};
  color: ${prop('iconColor')};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 50%;
    background-color: inherit;
    opacity: 0.2;
    transition: transform 0.3s ease;
  }
`;

interface SwitchHandleProps {
  disabled: boolean;
  size: [string, string];
  color: string;
}

export const Handle = styled.div<SwitchHandleProps>`
  position: relative;
  display: inline-block;
  cursor: ${ifProp('disabled', 'default', 'pointer')};

  width: ${prop('size.0')};
  min-width: ${prop('size.0')};
  height: ${prop('size.1')};
  border-radius: 10px;
  background-color: ${prop('color')};

  &:hover {
    ${Toggle} {
      &:before {
        transform: scale(1.5);
      }
    }
  }
`;

interface SwitchContainerProps {
  size: string;
}

export const Container = styled.label<SwitchContainerProps>`
  display: inline-flex;
  line-height: ${prop('size')};
`;

export const Label = styled.div`
  margin-left: 10px;
`;
