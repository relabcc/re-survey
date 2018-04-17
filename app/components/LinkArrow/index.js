import React from 'react';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import arrpw from './link-arrow.svg';

const Legs = (props) => (
  <Box.inline {...props}>
    <BackgroundImage ratio={1} src={arrpw} />
  </Box.inline>
);

export default Legs;
