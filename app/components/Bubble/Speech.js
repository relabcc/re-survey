import React from 'react';

import Border from '../Border';

import BubbleBase from './BubbleBase';
import topSrc from './speech-upper.svg';
import bottomSrc from './speech-lower.svg';

const ratio = 32.58 / 452.36;

const getBorder = ({ width }) => {
  if (!width) return '';
  const border = `${width * 0.013}px solid black`;
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

export default (props) => <BubbleBase {...config} pt="2%" {...props} />;
