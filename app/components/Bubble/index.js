import React from 'react';

import Box from '../Box';

import BubbleBase from './BubbleBase';
import top from './bubble-1-top.svg';
import bottom from './bubble-1-bottom.svg';

const ratio = 90 / 775;

const Fill = (props) => <Box bg="gray" {...props} />;

export default (props) => (
  <BubbleBase
    ratio={ratio}
    topSrc={top}
    bottomSrc={bottom}
    fill={Fill}
    {...props}
  />
);
