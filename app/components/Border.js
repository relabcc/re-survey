import {
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  borderColor,
  borderWidth,
  border,
  borderRadius,
} from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

export default styled(Box)`
  ${border}
  ${borderColor}
  ${borderWidth}
  ${borderBottom}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderRadius}
`;
