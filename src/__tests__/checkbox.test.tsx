import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Checkbox } from '../components/Checkbox';

describe('Checkbox', () => {
  it('accessible', async () => {
    const { container } = render(<Checkbox />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('calls onChange with true on click event if off', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Checkbox label="label" onChange={onChange} />
    );
    const label = getByText('label').parentElement;
    user.click(label);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange with false on click event if on', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Checkbox label="label" checked onChange={onChange} />
    );
    const label = getByText('label').parentElement;
    user.click(label);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('does not call onChange on click event if disabled', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Checkbox label="label" disabled checked onChange={onChange} />
    );
    const label = getByText('label').parentElement;
    user.click(label);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Does not throw error if onChange not provided', () => {
    const { getByText } = render(<Checkbox label="label" />);
    const label = getByText('label').parentElement;
    user.click(label);
    expect(true).toEqual(true);
  });
});
