import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { config } from '../../helpers/constants';

const VerifyEmail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('key');

  useEffect(() => {
    axios.post(`${config.API_URL}/api/v1/auth/registration/verify-email/`, {
      key,
    });
  });

  return (
    <div>
      <div>
        email verified! <Link to="/">go back home</Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
