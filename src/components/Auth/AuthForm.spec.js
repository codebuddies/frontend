import React from 'react';
import { fireEvent, render, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import AuthForm from './AuthForm';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

describe('AuthForm', () => {
  it('should render accordingly', () => {
    const { asFragment } = render(<AuthForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should only show the Sign Up form by default', () => {
    render(<AuthForm />);

    expect(screen.getByText('Create an account')).toBeInTheDocument();
    expect(screen.queryByTestId('loginForm')).toBeNull();
  });

  describe('when clicking on the Log in button in the Sign Up Form', () => {
    it('should show the Login Form', async () => {
      render(<AuthForm />);
      fireEvent.click(screen.getByText('Log in'));
      expect(await screen.findByTestId('loginForm')).toBeInTheDocument();
      expect(await screen.queryByTestId('signupForm')).toBeNull();
    });
  });

  describe('when clicking on the Sign up button in the Log In Form', () => {
    it('should show the Sign Up form', async () => {
      render(<AuthForm />);
      fireEvent.click(screen.getByText('Log in'));
      fireEvent.click(screen.getByText('Sign up'));
      expect(await screen.queryByTestId('loginForm')).toBeNull();
      expect(await screen.findByText('Create an account')).toBeInTheDocument();
    });
  });
});

describe('Signup', () => {
  it('Register a new user on the signup form', async () => {
    render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );

    const mockRegisterResponse = jest.fn().mockResolvedValue({
      data: {
        username: 'Carolyne.Carter',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkNhcm9seW5lLkNhcnRlciIsImlhdCI6MTU4NDMzODQ4NiwiZXhwIjoxNTg0MzQyMDg2LCJ1c2VyX2lkIjo4MCwib3JpZ19pYXQiOjE1ODQzMzg0ODZ9.saO6OCOKV1uwHjTbM-iDGmhbkMNCnzrGFj4TBYnTv2E',
        first_name: 'Carolyne',
        last_name: 'Carter',
        email: 'Carolyne.Carter@yahoo.com',
      },
    });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'Carolyne.Carter' },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'Carolyne.Carter@yahoo.com' },
    });

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'Carolyne' },
    });

    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Carter' },
    });

    fireEvent.click(screen.getByText('Sign Up'));

    await act(async () => mockRegisterResponse());

    expect(mockRegisterResponse).toHaveBeenCalledTimes(1);
  });

  it('Show required field validation error', async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );

    await act(async () => fireEvent.click(getByTestId('submitButton')));
    expect(getByText('Username*').className).toContain('Mui-error');
    expect(getByText('Email*').className).toContain('Mui-error');
    expect(getByText('Password*').className).toContain('Mui-error');
    expect(getByText('First Name*').className).toContain('Mui-error');
  });

  it('Show username length validation error', async () => {
    const { getByText, getByTestId, getByLabelText } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );

    fireEvent.change(getByLabelText(/username/i), {
      target: { value: 'ga' },
    });

    await act(async () => fireEvent.click(getByTestId('submitButton')));

    expect(
      getByText(/"Username" length must be at least 3 characters long/i)
    ).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('Fill out the login form', async () => {
    const { getByLabelText, getByRole } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );

    const mockLoginResponse = jest.fn().mockResolvedValue({
      data: {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkNhcm9seW5lLkNhcnRlciIsImlhdCI6MTU4NDM0MDAyMiwiZXhwIjoxNTg0MzQzNjIyLCJ1c2VyX2lkIjo4MCwib3JpZ19pYXQiOjE1ODQzNDAwMjJ9.0zNlXPVAjkBjxUQjq4B0HXnvrez93H2pz6n2ROKWzzg',
        username: 'Carolyne.Carter',
      },
    });

    await act(async () =>
      fireEvent.change(getByLabelText(/username/i), {
        target: { value: 'Carolyne.Carter' },
      })
    );
    await act(async () =>
      fireEvent.change(getByLabelText(/username/i), {
        target: { value: 'Carolyne.Carter' },
      })
    );

    await act(async () =>
      fireEvent.change(getByLabelText(/password/i), {
        target: { value: 'password' },
      })
    );

    const submit = getByRole('button');
    await act(async () => fireEvent.click(submit));
    await act(async () => mockLoginResponse());
    expect(mockLoginResponse).toHaveBeenCalledTimes(1);
  });
});
