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

import Box from './Box';
import LinkArrow from './LinkArrow';

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
    border-bottom-color: black;
  }
`;

const Link = ({ noBorder, ...props }) => {
  const { href, children } = props;
  const isOutbound = startsWith(href, 'http');
  const StyledLink = getStyledLink(isOutbound ? ReactGA.OutboundLink : 'a');
  if (noBorder) return <StyledLink to={href} eventLabel={href} {...props} />;
  return (
    <StyledLink to={href} eventLabel={href} {...props}>
      <Box.inline mx="0.25em" px="0.25em" py="0.25em" bg="gray" borderRadius="0.5em">
        {children}
      </Box.inline>
      <LinkArrow w="1.25em" mr="0.25em" />
    </StyledLink>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
};

Link.defaultProps = {
  letterSpacing: '0.05em',
};

export default Link;
