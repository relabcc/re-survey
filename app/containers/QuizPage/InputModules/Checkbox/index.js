import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Flex from 'components/Flex';
import BackgroundImage from 'components/BackgroundImage';
import Checkbox from 'components/Checkbox';

const CheckBox = ({ icon, options, onChange, ...props }) => (
  <Flex py="1em" w={1} flexWrap="wrap" {...props}>
    <Box w={[1, null, null, 1 / 3]} px="3em">
      <BackgroundImage src={icon} ratio={1} />
    </Box>
    <Flex flexWrap="wrap" w={[1, null, null, 2 / 3]}>
      {options.map(({ label }, index) => (
        <Checkbox
          w={[1, 1 / 2]}
          value={index}
          onChange={onChange}
        >
          {label}
        </Checkbox>
      ))}
    </Flex>
  </Flex>
);

CheckBox.propTypes = {
  icon: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckBox;
