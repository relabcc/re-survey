import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import stepImages from './stepImages';

const Wrapper = Box.extend`
  max-width: 20em;
`;

const Steps = ({ current, ...props }) => (
  <Wrapper w={1} py="em" px="7%" mx="auto" {...props}>
    <BackgroundImage src={stepImages[current]} ratio={77.6 / 259.9} />
  </Wrapper>
);

Steps.propTypes = {
  current: PropTypes.number,
};

Steps.defaultProps = {
  current: 0,
};

export default Steps;
