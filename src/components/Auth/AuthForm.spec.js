import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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
    const { getByText, queryByTestId } = render(<AuthForm />);

    expect(getByText('Create an account')).toBeInTheDocument();
    expect(queryByTestId('loginForm')).toBeNull();
  });

  describe('when clicking on the Log in button in the Sign Up Form', () => {
    it('should show the Login Form', () => {
      const { getByText, queryByTestId, getByTestId } = render(<AuthForm />);
      fireEvent.click(getByText('Log in'));
      expect(getByTestId('loginForm')).toBeInTheDocument();
      expect(queryByTestId('signupForm')).toBeNull();
    });
  });

  describe('when clicking on the Sign up button in the Log In Form', () => {
    it('should show the Sign Up form', () => {
      const { getByText, queryByTestId } = render(<AuthForm />);
      fireEvent.click(getByText('Log in'));
      fireEvent.click(getByText('Sign up'));
      expect(queryByTestId('loginForm')).toBeNull();
      expect(getByText('Create an account')).toBeInTheDocument();
    });
  });
});

describe('Signup', () => {
  it('Register a new user on the signup form', async () => {
    const { getByText, getByLabelText } = render(
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

    fireEvent.change(getByLabelText(/username/i), {
      target: { value: 'Carolyne.Carter' },
    });

    fireEvent.change(getByLabelText(/password/i), {
      target: { value: 'password' },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: 'Carolyne.Carter@yahoo.com' },
    });
    fireEvent.change(getByLabelText(/first name/i), {
      target: { value: 'Carolyne' },
    });
    fireEvent.change(getByLabelText(/last name/i), {
      target: { value: 'Carter' },
    });
    const submit = getByText('Sign Up');
    fireEvent.click(submit);

    await mockRegisterResponse();

    expect(mockRegisterResponse).toHaveBeenCalledTimes(1);
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
    fireEvent.change(getByLabelText(/username/i), {
      target: { value: 'Carolyne.Carter' },
    });

    fireEvent.change(getByLabelText(/password/i), {
      target: { value: 'password' },
    });
    const submit = getByRole('button');
    fireEvent.click(submit);
    await mockLoginResponse();
    expect(mockLoginResponse).toHaveBeenCalledTimes(1);
  });
});
