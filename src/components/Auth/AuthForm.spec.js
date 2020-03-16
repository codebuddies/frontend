import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthForm from './AuthForm';

describe('AuthForm', () => {
  it('should render accordingly', () => {
    const { asFragment } = render(<AuthForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should only show the Sign Up form by default', () => {
    const { getByText, debug, queryByTestId } = render(<AuthForm />);

    console.log(debug);
    console.log(queryByTestId('loginForm'));

    expect(getByText('Create an account')).toBeInTheDocument();
    expect(queryByTestId('loginForm')).toBeNull();
  });

  describe('when clicking on the Log in button in the Sign Up Form', () => {
    it('should show the Login Form', () => {
      const { getByText, debug, queryByTestId, getByTestId } = render(
        <AuthForm />
      );
      fireEvent.click(getByText('Log in'));
      console.log(debug);
      expect(getByTestId('loginForm')).toBeInTheDocument();
      expect(queryByTestId('signupForm')).toBeNull();
    });
  });

  describe('when clicking on the Sign up button in the Log In Form', () => {
    it('should show the Sign Up form', () => {
      const { getByText, debug, queryByTestId } = render(<AuthForm />);
      fireEvent.click(getByText('Log in'));
      fireEvent.click(getByText('Sign up'));
      console.log(debug);
      expect(queryByTestId('loginForm')).toBeNull();
      expect(getByText('Create an account')).toBeInTheDocument();
    });
  });
});
