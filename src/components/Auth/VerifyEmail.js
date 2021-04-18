import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { config } from '../../helpers/constants';

const VerifyEmail = () => {
  const [verifyStatus, setVerifyStatus] = useState('');
  const [error, setError] = useState('');
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('key');

  useEffect(() => {
    if (key) {
      axios
        .post(`${config.API_URL}/api/v1/auth/registration/verify-email/`, {
          key,
        })
        .then(resp => {
          if (resp.status === 200) {
            setVerifyStatus('Your email has been verified!');
          }
        })
        .catch(e => {
          console.error(e);
          setError(e.message);
        });
    } else {
      setError('There is no key in the URL.');
    }
  }, [key]);

  return (
    <div>
      <div>
        {verifyStatus ? (
          <span>{`${verifyStatus}`}</span>
        ) : (
          <p>
            Thank you for signing up! Please check your email to verify your
            account.
          </p>
        )}
        {error && <span style={{ color: 'red' }}>{`${error}`}</span>}
        <br />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
