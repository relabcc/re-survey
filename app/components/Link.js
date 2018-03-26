import React from 'react';
import styled from 'styled-components';

import Text from './Text';

export default styled((props) => <Text is="a" {...props} />)`
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
