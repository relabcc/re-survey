import styled from 'styled-components';

import Box from '../Box';

import img from './bulletin-point.svg';

const Ul = styled(Box.withComponent('ul'))`
  list-style-image: url(${img});
  li {
    line-height: 2;
  }
`;

export default Ul;
