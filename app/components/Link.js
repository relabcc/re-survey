import React from 'react';
import styled from 'styled-components';

import Text from './Text';

export default styled((props) => <Text is="a" {...props} />)`
  cursor: pointer;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
