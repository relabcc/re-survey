import {
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderColor,
  borderWidth,
  border,
} from 'styled-system';

import Box from './Box';

export default Box.extend`
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderColor}
  ${borderWidth}
  ${border}
`;
