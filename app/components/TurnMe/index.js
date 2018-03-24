import React from 'react';
import styled from 'styled-components';

import Absolute from '../Absolute';
import BackgroundImage from '../BackgroundImage';

import src from './bubble-1.svg';

const Transition = styled(Absolute)`
  transition: opacity 0.5s ease;
`;

const TurnMe = (props) => (
  <Transition {...props}>
    <BackgroundImage ratio={137.71 / 157.23} src={src} />
  </Transition>
);

export default TurnMe;
