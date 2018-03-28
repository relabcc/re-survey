import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import img from './bubble-1-head.svg';

const TextWithIcon = ({ children, ...props }) => (
  <Flex align="center" justify="center" {...props}>
    <Box w="4em" mr="0.25em">
      <BackgroundImage src={img} ratio={1} />
    </Box>
    <Text f="1.25em" fontWeight="bold">
      {children}
    </Text>
  </Flex>
);

TextWithIcon.propTypes = {
  children: PropTypes.node,
};

export default TextWithIcon;
