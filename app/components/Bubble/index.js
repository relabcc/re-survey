import React from 'react';

import Box from '../Box';

import bubbleFactory from './bubbleFactory';
import top from './bubble-1-top.svg';
import bottom from './bubble-1-bottom.svg';

const ratio = 90 / 775;

export default bubbleFactory({
  ratio,
  top,
  bottom,
  Fill: (props) => <Box bg="gray" {...props} />,
});
