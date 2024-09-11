import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, vitest } from 'vitest';

import Joke from './Joke';

const fetchMock = vitest.fn();
global.fetch = fetchMock;

describe('Joke', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Joke />);
    expect(baseElement).toBeTruthy();
  });

  it('should display joke header', () => {
    const { getByText } = render(<Joke />);
    expect(getByText('Chuck Norris Jokes!')).toBeTruthy();
  });

  it('should display button to fetch a new joke', () => {
    const { getByText } = render(<Joke />);
    expect(getByText(/new joke/i)).toBeTruthy();
  });

  it('when i click on the button i want to see a new joke', async () => {
    const { getByText, findByText } = render(<Joke />);

    const button = getByText(/new joke/i);
    expect(button).toBeTruthy();

    const joke = 'My Cool new Joke';
    fetchMock.mockResolvedValue({
      json: () => Promise.resolve({ value: joke }),
    });
    // All 3 approaches are equivalent
    // fetchMock.mockReturnValue(Promise.resolve({ json: () => Promise.resolve({ value: joke }) }))
    // fetchMock.mockImplementation(
    //   () => Promise.resolve({ json: () => Promise.resolve({ value: joke }) })
    // );
    await userEvent.click(button);
    expect(await findByText(joke)).toBeTruthy();
  });

  it('display an error when joke fetch fails', async () => {
    const { getByText, findByText } = render(<Joke />);

    const button = getByText(/new joke/i);
    expect(button).toBeTruthy();

    fetchMock.mockRejectedValue('OH NO :/ ');
    await userEvent.click(button);
    expect(await findByText(/failed to fetch/i)).toBeTruthy();
  });
});
