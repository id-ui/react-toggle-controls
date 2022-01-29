import { ToggleState } from '../ToggleControl/types';
import { CheckboxThemedElements } from './types';

export const defaultColors = {
  [ToggleState.on]: {
    [CheckboxThemedElements.background]: '#580B9E',
    [CheckboxThemedElements.border]: '#580B9E',
    [CheckboxThemedElements.icon]: '#FFFFFF',
  },
  [ToggleState.off]: {
    [CheckboxThemedElements.background]: 'transparent',
    [CheckboxThemedElements.border]: '#CCCCCC',
    [CheckboxThemedElements.icon]: 'transparent',
    hover: {
      [CheckboxThemedElements.border]: '#580B9E',
    },
  },
  [ToggleState.disabled]: {
    [CheckboxThemedElements.background]: '#F5F5F5',
    [CheckboxThemedElements.border]: '#D9D9D9',
    [CheckboxThemedElements.icon]: '#D9D9D9',
  },
};
