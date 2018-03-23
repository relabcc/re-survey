import React from 'react';
// import PropTypes from 'prop-types';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import legs from './legs.svg';

const Legs = (props) => (
  <Box {...props}>
    <BackgroundImage ratio={88.62 / 194.6} src={legs} />
  </Box>
);

export default Legs;
