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

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const Link = ({ href, ...props }) => {
  const isOutbound = startsWith(href, 'http');
  const StyledLink = getStyledLink(isOutbound ? ReactGA.OutboundLink : 'a');
  return (
    <StyledLink href={href} to={href} eventLabel={href} {...props} />
  );
};

Link.propTypes = {
  href: PropTypes.string,
};

Link.defaultProps = {
  letterSpacing: '0.05em',
};

export default Link;
