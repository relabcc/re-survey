import React from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import Flex from 'components/Flex';

import TitleLogo from './TitleLogo';

const logoW = '15em';

const FixedLogo = ({ children, ...props }) => (
  <Flex
    position="absolute"
    top={0}
    px={['1em', null, '2em']}
    w={1}
    align="center"
    py="1em"
    {...props}
  >
    <Box w={['10em', null, logoW]} pr={['1em', null, '2em']}>
      <TitleLogo />
    </Box>
    {children}
    <Box w={[0, null, logoW]} />
  </Flex>
);

FixedLogo.propTypes = {
  children: PropTypes.node,
};

export default FixedLogo;
