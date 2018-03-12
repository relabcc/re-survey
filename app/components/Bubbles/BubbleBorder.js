import Box from '../Box';

import border from './bubble-border.svg';

const width = 788;
const height = 190;
const leftWidth = 380;
const leftHeight = 90;
const rightWidth = 398;

const percent = (n) => `${n * 100}%`;

const BubbleBorder = Box.extend`
  border-image: url(${border}) ${percent(leftHeight / height)} ${percent(leftWidth / width)} ${percent(leftHeight / height)} ${percent(rightWidth / width)} repeat;
`;

export default BubbleBorder;
