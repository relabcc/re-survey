import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import stepImages from './stepImages';

const Wrapper = Box.extend`
  max-width: 20em;
`;

const Steps = ({ current, ...props }) => (
  <Wrapper w={1} py="1em" mx="auto" {...props}>
    <BackgroundImage src={stepImages[current]} ratio={77.61 / 388.25} />
  </Wrapper>
);

Steps.propTypes = {
  current: PropTypes.number,
};

Steps.defaultProps = {
  current: 0,
};

export default Steps;
