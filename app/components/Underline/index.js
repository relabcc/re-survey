import React from 'react';
import styled from 'styled-components';
import bowser from 'bowser';

import Box from '../Box';
import sprite from './underline-square.svg';
import spriteBlack from './underline-square-black.svg';
import line from './line.svg';
import lineBlack from './line-black.svg';

const fallback = bowser.osname === 'iOS' || bowser.name === 'Safari';

const Underline = styled(Box)`
  ${fallback ? `
  &::after {
    content: url(${line});
    width: 100%;
  }
  ` : `
  border: 0.5em solid transparent;
  border-image: url(${sprite}) 27.5% repeat;
  `}
`;

Underline.forCheckbox = styled(Underline)`
  ${fallback && `
    &::after {
      display: block;
      margin-top: -5%;
      margin-bottom: -5%;
    }
  `}
`;

Underline.forDegree = styled(Underline)`
  ${fallback && `
    &::after {
      display: block;
      margin-top: -3%;
    }
  `}
`;

Underline.black = styled(Underline)`
  ${fallback ? `
  &::after {
    content: url(${lineBlack});
  }
  ` : `
  border-image: url(${spriteBlack}) 27.5% repeat;
  `}
`;

Underline.black.forDegree = styled(Underline.black)`
  ${fallback && `
    &::after {
      display: block;
      margin-top: -3%;
    }
  `}
`;

const Inline = styled(Underline)`
  ${fallback && `
    &::after {
      display: block;
      margin-top: -1em;
    }
  `}
`;

Underline.inline = (props) => <Inline is="span" mx="-0.25em" display="inline-block" {...props} />;
Underline.inline.black = (props) => <Underline.black.forDegree is="span" mx="-0.25em" display="inline-block" {...props} />;

export default Underline;
