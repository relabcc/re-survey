import React from 'react';

import Border from '../Border';

import bubbleFactory from './bubbleFactory';
import top from './dialog-upper.svg';
import bottom from './dialog-lower.svg';
import bottomFlipped from './dialog-lower-flipped.svg';

const ratio = 104.14 / 399.47;

const getBorder = ({ width }) => {
  if (!width) return '';
  const border = `${width * 0.015}px solid black`;
  return `
    border-left: ${border};
    border-right: ${border};
  `;
};

const BorderFill = Border.extend`
  ${getBorder}
`;

const config = {
  ratio,
  top,
  bottom,
  Fill: (props) => <BorderFill bg="bg" {...props} />,
};

const Dialog = bubbleFactory(config);

Dialog.flipped = bubbleFactory({
  ...config,
  bottom: bottomFlipped,
});

export default Dialog;
