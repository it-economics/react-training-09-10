import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe } from 'vitest';
import { Home } from './Home';

describe('Home', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });

  it('should display name that is entered into input',async () => {
    const { getByLabelText, getByText, queryByText } = render(<Home />);
    expect(queryByText('Hello React!')).toBeFalsy();

    const input = getByLabelText(/input/i);
    await userEvent.type(input, 'React');

    const button = getByText(/toggle/i);
    await userEvent.click(button);

    expect(getByText('Hello React!')).toBeTruthy();
  });
})
