import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { axe } from 'jest-axe';
import Radio from 'components/Radio';

describe('Radio', () => {
    it('accessible', async () => {
        const { container } = render(<Radio />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('calls onChange with true on click event if off',  () => {
        const onChange = jest.fn();
        const { getByText } = render(
            <Radio label="label" onChange={onChange} />
        );
        const label = getByText('label').parentElement;
        user.click(label);
        expect(onChange).toHaveBeenCalled();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(true);
    });

    it('does not call onChange on click event if on',  () => {
        const onChange = jest.fn();
        const { getByText } = render(
            <Radio label="label" checked onChange={onChange} />
        );
        const label = getByText('label').parentElement;
        user.click(label);
        expect(onChange).not.toHaveBeenCalled();
    });

    it('does not call onChange on click event if disabled',  () => {
        const onChange = jest.fn();
        const { getByText } = render(
            <Radio label="label" disabled onChange={onChange} />
        );
        const label = getByText('label').parentElement;
        user.click(label);
        expect(onChange).not.toHaveBeenCalled();
    });
});
