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
  it('Fill out the signup form', () => {
    const { getByText, debug, getByRole } = render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    const mockRegisterCall = jest.fn();
    mockRegisterCall.mockResolvedValueOnce({
      data: {
        username: 'Carolyne.Carter',
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkNhcm9seW5lLkNhcnRlciIsImlhdCI6MTU4NDMzODQ4NiwiZXhwIjoxNTg0MzQyMDg2LCJ1c2VyX2lkIjo4MCwib3JpZ19pYXQiOjE1ODQzMzg0ODZ9.saO6OCOKV1uwHjTbM-iDGmhbkMNCnzrGFj4TBYnTv2E',
        first_name: 'Bud',
        last_name: 'Paucek',
        email: 'Josiah.McLaughlin8@yahoo.com',
      },
    });
    debug();
    const submit = getByRole('button');
    fireEvent.click(submit);
    expect(getByText('Create an account')).toBeInTheDocument();
  });
});

describe('Login', () => {
  it('Fill out the login form', () => {
    const { getAllByText, debug, getByRole } = render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const mockLoginCall = jest.fn();
    mockLoginCall.mockResolvedValueOnce({
      data: {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IkNhcm9seW5lLkNhcnRlciIsImlhdCI6MTU4NDM0MDAyMiwiZXhwIjoxNTg0MzQzNjIyLCJ1c2VyX2lkIjo4MCwib3JpZ19pYXQiOjE1ODQzNDAwMjJ9.0zNlXPVAjkBjxUQjq4B0HXnvrez93H2pz6n2ROKWzzg',
        username: 'Carolyne.Carter',
      },
    });
    debug();
    const submit = getByRole('button');
    fireEvent.click(submit);
    expect(getAllByText('Log in')[1]).toBeInTheDocument();
  });
});
