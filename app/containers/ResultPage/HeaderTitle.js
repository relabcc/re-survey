import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from 'components/Box';
import Text from 'components/Text';

const size = '1.25em';

const Triangle = styled(Box)`
  width: 0;
  height: 0;
  border-left: ${size} solid transparent;
  border-right: ${size} solid transparent;

  border-top: ${size} solid black;
`;

const poses = ['17.5%', '47.5%', '77.5%'];

const HeaderTitle = ({ children, pos, ...props }) => (
  <Box align="center" {...props}>
    <Box
      bg="black"
      color="white"
      px="1em"
      py={['1em', null, '2em']}
      borderRadius="2.5em"
    >
      <Text f="1.25em" fontWeight="bold">
        {children}
      </Text>
    </Box>
    <Triangle ml={poses[pos]} />
  </Box>
);

HeaderTitle.propTypes = {
  children: PropTypes.node,
  pos: PropTypes.number,
};

export default HeaderTitle;
