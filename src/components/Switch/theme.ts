import { ToggleState } from '../ToggleControl/types';
import { SwitchThemedElements } from './types';

export const defaultColors = {
  [ToggleState.on]: {
    [SwitchThemedElements.toggle]: '#580B9E',
    [SwitchThemedElements.handle]: '#580B9E',
    [SwitchThemedElements.icon]: '#FFFFFF',
  },
  [ToggleState.off]: {
    [SwitchThemedElements.toggle]: '#FFFFFF',
    [SwitchThemedElements.handle]: '#CCCCCC',
    [SwitchThemedElements.icon]: '#CCCCCC',
  },
  [ToggleState.disabled]: {
    [SwitchThemedElements.toggle]: '#F5F5F5',
    [SwitchThemedElements.handle]: '#D9D9D9',
    [SwitchThemedElements.icon]: '#D9D9D9',
  },
};
