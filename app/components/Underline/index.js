import React from 'react';
import styled from 'styled-components';

import Box from '../Box';
import sprite from './underline-square.svg';
import spriteBlack from './underline-square-black.svg';

const Underline = styled(Box)`
  border: 0.5em solid transparent;
  border-image: url(${sprite}) 27.5% repeat;
`;

Underline.black = styled(Underline)`
  border-image: url(${spriteBlack}) 27.5% repeat;
`;

Underline.inline = (props) => <Underline display="inline-block" {...props} />;
Underline.inline.black = (props) => <Underline.black display="inline-block" {...props} />;

export default Underline;
