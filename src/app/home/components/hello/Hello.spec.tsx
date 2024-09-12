import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Hello from './Hello';

describe('Hello', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hello />);
    expect(baseElement).toBeTruthy();
  });

  it('should display name after pressing toggle', async () => {
    const { getByText, queryByText } = render(<Hello name="Awesome React" />);
    expect(queryByText('Hello Awesome React!')).toBeFalsy();

    const button = getByText(/toggle/i);
    await userEvent.click(button);

    expect(getByText('Hello Awesome React!')).toBeTruthy();

    await userEvent.click(button);
    expect(queryByText('Hello Awesome React!')).toBeFalsy();
  });
});
