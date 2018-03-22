import React from 'react';
import PropTypes from 'prop-types';

import Absolute from '../Absolute';
import BackgroundImage from '../BackgroundImage';

import bubble from './bubble.svg';

const Content = Absolute.extend`
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  height: 100%
`;

const StaticBubble = ({ children, ...props }) => (
  <BackgroundImage {...props} src={bubble} ratio={128.944 / 778.385}>
    <Content>
      {children}
    </Content>
  </BackgroundImage>
);

StaticBubble.propTypes = {
  children: PropTypes.node,
};

export default StaticBubble;
