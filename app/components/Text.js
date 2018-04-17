import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  style,
  display,
  textAlign,
  margin,
  position,
} from 'styled-system';
import tag from 'clean-tag';

import { textIndent, letterSpacing } from './utils/customProps';
import blacklist from './utils/blacklist';

const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
});

const Text = styled(tag.p)`
  margin-top: 0;
  margin-bottom: 0;
  ${display}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
  ${textTransform}
  ${textIndent}
  ${margin}
  ${letterSpacing}
  ${position}
`;

Text.defaultProps = {
  f: '1em',
  lineHeight: 1.5,
  letterSpacing: '.05em',
  blacklist,
  fontWeight: 300,
};

Text.span = Text.withComponent('span');
Text.s = Text.withComponent('s');
Text.bold = (props) => <Text.span fontWeight={900} {...props} />;

export default Text;
