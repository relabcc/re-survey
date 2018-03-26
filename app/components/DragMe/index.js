import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Absolute from '../Absolute';
import BackgroundImage from '../BackgroundImage';

import drag from './bubble-2.svg';
import click from './click-me.svg';

const Transition = styled(Absolute)`
  transition: opacity 0.5s ease;
`;

const DragMe = ({ src, ...props }) => (
  <Transition {...props}>
    <BackgroundImage ratio={91.1 / 103.74} src={src} />
  </Transition>
);

DragMe.propTypes = {
  src: PropTypes.string,
};

DragMe.defaultProps = {
  src: drag,
};

DragMe.click = (props) => <DragMe {...props} src={click} />;

export default DragMe;
