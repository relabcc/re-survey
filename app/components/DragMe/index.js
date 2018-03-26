import React from 'react';
import styled from 'styled-components';

import Absolute from '../Absolute';
import BackgroundImage from '../BackgroundImage';

import src from './bubble-2.svg';

const Transition = styled(Absolute)`
  transition: opacity 0.5s ease;
`;

const DragMe = (props) => (
  <Transition {...props}>
    <BackgroundImage ratio={91.1 / 103.74} src={src} />
  </Transition>
);

export default DragMe;