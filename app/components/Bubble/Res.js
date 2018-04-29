import React from 'react';

import Border from '../Border';

import BubbleBase from './BubbleBase';
import topSrc from './res-upper.svg';
import bottomSrc from './res-lower.svg';

const ratio = 19.18 / 413.8;

const getBorder = ({ width }) => {
  if (!width) return '';
  const border = `${width * 0.007}px solid black`;
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

const Res = (props) => <BubbleBase {...config} {...props} />;

export default Res;
