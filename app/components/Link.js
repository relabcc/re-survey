import React from 'react';
import PropTypes from 'prop-types';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  display,
  textAlign,
  margin,
  position,
  letterSpacing,
  themeGet,
  borderBottom,
} from 'styled-system';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import startsWith from 'lodash/startsWith';

const getStyledLink = (ele) => styled(ele)`
  ${display}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
  ${lineHeight}
  ${margin}
  ${letterSpacing}
  ${position}
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid ${themeGet('colors.darkGray')};
  padding-bottom: 0.2em;
  ${borderBottom}

  &:hover {
    color: black;
    border-bottom-color: black;
  }
`;

const Link = ({ noBorder, href, ...props }) => {
  const isOutbound = startsWith(href, 'http');
  const StyledLink = getStyledLink(isOutbound ? ReactGA.OutboundLink : 'a');
  return (
    <StyledLink borderBottom={noBorder ? 'none' : undefined} href={href} to={href} eventLabel={href} {...props} />
  );
};

Link.propTypes = {
  href: PropTypes.string,
  noBorder: PropTypes.bool,
};

Link.defaultProps = {
  letterSpacing: '0.05em',
};

export default Link;
