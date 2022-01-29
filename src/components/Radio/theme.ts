import { ToggleState } from '../ToggleControl/types';
import { RadioThemedElements } from './types';

export const defaultColors = {
  [ToggleState.on]: {
    [RadioThemedElements.border]: '#580B9E',
    [RadioThemedElements.toggle]: '#580B9E',
  },
  [ToggleState.off]: {
    [RadioThemedElements.border]: '#CCCCCC',
    [RadioThemedElements.toggle]: 'transparent',
    hover: {
      [RadioThemedElements.border]: '#580B9E',
    },
  },
  [ToggleState.disabled]: {
    [RadioThemedElements.border]: '#D9D9D9',
    [RadioThemedElements.toggle]: '#D9D9D9',
  },
};
