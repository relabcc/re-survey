import React from 'react';
import styled from 'styled-components';

import Box from '../Box';

import img from './bulletin-point.svg';

const Ul = styled((props) => <Box {...props} is="ul" />)`
  list-style-image: url(${img});
`;

export default Ul;
