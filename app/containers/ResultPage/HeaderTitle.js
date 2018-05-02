import React from 'react';

import Box from 'components/Box';
import Text from 'components/Text';

const HeaderTitle = (props) => (
  <Box align="center" {...props}>
    <Box
      bg="black"
      color="white"
      px="5em"
      py={['1em', null, '2em']}
      borderRadius="2.5em"
      display="inline-block"
    >
      <Text f="1.5em" fontWeight="bold">
        「資訊肥胖症」檢測結果
      </Text>
    </Box>
  </Box>
);

export default HeaderTitle;
