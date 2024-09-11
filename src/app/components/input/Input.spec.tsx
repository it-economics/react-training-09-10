import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input onInputChange={vi.fn()} />);
    expect(baseElement).toBeTruthy;
  });

  it('should return entered text', async () => {
    const onInputChangeMock = vi.fn();
    const { getByLabelText, getByTestId } = render(
      <Input onInputChange={onInputChangeMock} />
    );

    const inputElement = getByLabelText(/input/i);
    expect(inputElement).toBeTruthy();

    await userEvent.type(inputElement, 'Hello World');
    expect(onInputChangeMock).toHaveBeenCalledWith('Hello World');

    // Can also get via test-id if needed
    expect(getByTestId('my-cool-input')).toBeTruthy();
  });
});
