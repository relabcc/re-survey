import Box from '../Box';

import sprite from './underline-square.svg';

const Underline = Box.extend`
  border: 0.5em solid transparent;
  border-image: url(${sprite}) 27.5% repeat;
`;

export default Underline;
