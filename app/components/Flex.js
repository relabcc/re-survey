import {
  alignItems,
  justifyContent,
  flexDirection,
} from 'styled-system';

import Box from './Box';

export default Box.extend`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
`;
