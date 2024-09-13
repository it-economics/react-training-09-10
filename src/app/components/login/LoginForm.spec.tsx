import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import { LoginForm } from './LoginForm';

const mocks = vi.hoisted(() => ({
  login: vi.fn(),
}));

vi.mock('../../auth/auth-utils', async (importOriginal) => {
  const original = (await importOriginal()) as any;
  return {
    ...original, // keep the original implementation
    login: mocks.login, // only override the login function
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    mocks.login.mockClear();
    mocks.login.mockResolvedValue({
      json: () => Promise.resolve({ token: 'abcd' }),
    });
  });

  it('should render', () => {
    renderLoginForm();
  });

  it('should login with email and password', async () => {
    const { emailField, passwordField, submitBtn } = renderLoginForm();

    const testMail = 'foo@bar.com';
    const testPassword = 'V€ry$€cr€tP@$$w0rd';

    const user = userEvent.setup();

    await user.type(emailField, testMail);
    await user.type(passwordField, testPassword);
    await user.click(submitBtn);

    expect(mocks.login).toHaveBeenCalledWith(testMail, testPassword);
  });
});

function renderLoginForm() {
  const { getByLabelText, getByRole } = render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );
  return {
    emailField: getByLabelText(/e-mail/i),
    passwordField: getByLabelText(/password/i),
    submitBtn: getByRole('button', { name: /login/i }),
  };
}
