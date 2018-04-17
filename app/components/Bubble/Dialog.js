import React from 'react';

import Border from '../Border';

import BubbleBase from './BubbleBase';
import topSrc from './dialog-upper.svg';
import bottomSrc from './dialog-lower.svg';
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
  topSrc,
  bottomSrc,
  fill: (props) => <BorderFill bg="bg" {...props} />,
};

const Dialog = (props) => <BubbleBase {...config} {...props} />;

Dialog.flipped = (props) => <BubbleBase {...config} bottomSrc={bottomFlipped} {...props} />;

export default Dialog;
