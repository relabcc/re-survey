import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Text from '../Text';
import BackgroundImage from '../BackgroundImage';

import down from './down.svg';

const ArrowDown = ({ onClick, children, ...props }) => (
  <Box align="center" {...props}>
    <Box display="inline-block" align="center">
      <Box mx="auto" w="3em" onClick={onClick}>
        <BackgroundImage src={down} ratio={1} />
      </Box>
      <Text mt="0.5em" onClick={onClick}>{children}</Text>
    </Box>
  </Box>
);

ArrowDown.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ArrowDown.defaultProps = {
  children: '往下看',
};

export default ArrowDown;
