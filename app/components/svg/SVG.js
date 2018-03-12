import React from 'react';
import PropTypes from 'prop-types';

import InlineBox from '../InlineBox';

const Container = InlineBox.extend`
  svg {
    vertical-align: bottom;
    width: 100%;
  }
`;

const SVG = ({ viewBox, children, ...props }) => (
  <Container {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
      {children}
    </svg>
  </Container>
);

SVG.propTypes = {
  viewBox: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SVG;
