import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ValidarProps = ({label = 'Ano: ',ano }) =>  {
  return (
    <Text 
        style={{fontSize: 35}}
    >
        {label}
        {ano + 2000}

    </Text>
  );
};

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
};
export default ValidarProps;
