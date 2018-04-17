import React, { PureComponent } from 'react';
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

import Box from './Box';
import LinkArrow from './LinkArrow';

const StyledLink = styled(ReactGA.OutboundLink)`
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
  white-space: nowrap;
`;

class Link extends PureComponent {
  state = {
    hover: false,
  }

  handleHoverIn = () => this.setState({ hover: true })
  handleHoverOut = () => this.setState({ hover: false })

  render() {
    const { noBorder, ...props } = this.props;
    const { href, children } = props;
    const { hover } = this.state;
    if (noBorder) return <StyledLink to={href} eventLabel={href} {...props} />;
    return (
      <StyledLink
        to={href}
        eventLabel={href}
        lineHeight="1.5"
        onMouseEnter={this.handleHoverIn}
        onMouseLeave={this.handleHoverOut}
        onFocus={this.handleHoverIn}
        onBlur={this.handleHoverOut}
        {...props}
      >
        <Box.inline
          display="inline"
          mx="0.25em"
          px="0.25em"
          py="0.25em"
          bg={hover ? 'darkGray' : 'gray'}
          borderRadius="0.5em"
          color={hover ? 'bg' : 'black'}
          transition="all 0.2s"
        >
          {children}
        </Box.inline>
        <LinkArrow
          w="1.25em"
          mr="0.5em"
          bg={hover ? 'darkGray' : 'bg'}
          color={hover ? 'bg' : 'black'}
          stroke={hover ? 'darkGray' : 'black'}
        />
      </StyledLink>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
};

Link.defaultProps = {
  letterSpacing: '0.05em',
};

export default Link;
