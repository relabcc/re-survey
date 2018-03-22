import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Flex from 'components/Flex';
import BackgroundImage from 'components/BackgroundImage';
import Checkbox from 'components/Checkbox';

const CheckBox = ({ icon, options, onChange, title, ...props }) => (
  <Flex py="1em" w={1} flexWrap="wrap" {...props}>
    <Box w={[1, null, 1 / 4]} px={['25%', null, '1.5em']}>
      <BackgroundImage src={icon} ratio={1} />
    </Box>
    <Flex flexWrap="wrap" w={[1, null, 3 / 4]} mt={['2em', null, 0]}>
      {options.map(({ label }, index) => (
        <Checkbox
          w={[1, 1 / 2]}
          my="0.25em"
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
  title: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckBox;
