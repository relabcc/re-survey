import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import get from 'lodash/get';
import Box from '../Box';

import theme from '../ThemeProvider/theme';

const themeGetColor = (color) => get(theme, `colors.${color}`) || color;

const TransitablePath = styled.path`
  transition: all 0.2s;
`;

const LinkArrow = ({ bg, color, stroke, ...props }) => (
  <Box.inline {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <TransitablePath fill={themeGetColor(bg)} d="M17,2.1A14.13,14.13,0,0,0,6.32,3.59a11,11,0,0,0-5,10,10.62,10.62,0,0,0,4.76,7.63,13.75,13.75,0,0,0,8.45,2,9.79,9.79,0,0,0,6.37-2.48,11.09,11.09,0,0,0,2.8-6.87,13.25,13.25,0,0,0-1.58-8.1c-1.44-2.34-4.49-4.2-7-3.8" />
      <TransitablePath fill={themeGetColor(stroke)} d="M17.31,1C10.45-.25,2.88,2,.64,9.34c-2.14,7,3.09,13.51,9.92,14.72s12.87-1.87,14.07-9c1.09-6.43-2-14.56-9.58-14.3-1.45,0-1.45,2.3,0,2.25,5.8-.2,8,5.89,7.5,10.77-.69,6.73-6.63,9.56-12.83,7.76C4.17,20,.85,14.35,3.29,8.88s8.09-6.68,13.43-5.7c1.41.26,2-1.9.59-2.17Z" />
      <TransitablePath fill={themeGetColor(color)} d="M8.43,14l7.51.1a1.13,1.13,0,0,0,0-2.25l-7.51-.1a1.13,1.13,0,0,0,0,2.25Z" />
      <TransitablePath fill={themeGetColor(color)} d="M12,9.23l2,1.84c.37.34,1.37,1,1.43,1.47s-1.19,1.7-1.41,2l-1.41,2,1.94,1.14.22-.37a1.13,1.13,0,0,0-1.94-1.14l-.22.37c-.76,1.26,1.12,2.31,1.94,1.14l2.12-3c.48-.7,1.22-1.49,1.16-2.41a3,3,0,0,0-1.25-1.88c-1-.93-2-1.84-3-2.76S11,8.24,12,9.23Z" />
    </svg>
  </Box.inline>
);

LinkArrow.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
  stroke: PropTypes.string,
};

LinkArrow.defaultProps = {
  bg: 'bg',
  color: 'black',
  stroke: 'black',
};

export default LinkArrow;
