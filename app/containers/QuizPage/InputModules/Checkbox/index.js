import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Flex from 'components/Flex';
import Image from 'components/Image';
import Checkbox from 'components/Checkbox';

const CheckBox = ({ icon, options, onChange, title, variation, ...props }) => {
  const ImageWrapper = variation === 2 ? (p) => <Box w={1} px="25%" {...p} />
    : (p) => <Box w={[1, null, 1 / 4]} px={['25%', null, '1.5em']} {...p} />;
  const OptionsWrapper = variation === 2 ? (p) => <Flex flexWrap="wrap" w={1} mt="2em" {...p} />
    : (p) => <Flex flexWrap="wrap" w={[1, null, 3 / 4]} mt={['2em', null, 0]} {...p} />;
  return (
    <Flex py="1em" w={1} flexWrap="wrap" {...props}>
      <ImageWrapper>
        <Image src={icon} />
      </ImageWrapper>
      <OptionsWrapper>
        {options.map(({ label }, index) => (
          <Checkbox
            w={variation === 2 ? [1 / 2, null, 1 / 3] : 1 / 2}
            my="0.25em"
            value={index}
            onChange={onChange}
          >
            {label}
          </Checkbox>
        ))}
      </OptionsWrapper>
    </Flex>
  );
};

CheckBox.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  variation: PropTypes.number,
};

export default CheckBox;
