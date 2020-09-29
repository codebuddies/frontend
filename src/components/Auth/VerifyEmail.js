import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { verifyEmail } from '../../utils/queries';

function VerifyEmail({ matchProps }) {
  console.log(matchProps);
  const key = matchProps.match.params.key;
  console.log(key);
  const { isLoading, data, error } = useQuery(['key', key], verifyEmail);
  console.log(isLoading);
  console.log(data);
  console.log(error);
  return <h1>verify email</h1>;
}

VerifyEmail.propTypes = {
  matchProps: PropTypes.object,
};

export default VerifyEmail;
