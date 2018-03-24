import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import tag from 'clean-tag';

import Box from '../Box';
import Absolute from '../Absolute';
import BackgroundImage from '../BackgroundImage';
import Link from '../RouterLink';

import blacklist from '../utils/blacklist';
import getColor from '../utils/getColor';
import button1 from './button-1.svg';
import button1Hover from './button-1-hover.svg';
import button2 from './button-2.svg';
import button2Hover from './button-2-hover.svg';
import button3 from './button-3.svg';
import button3Hover from './button-3-hover.svg';

const Button = styled(tag)`
  padding: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-family: inherit;
  ${fontWeight}
  &:hover {
    ${(props) => !props.disabled && props.hoverColor && `color: ${getColor(props.hoverColor)(props)};`}
  }
`;

Button.defaultProps = {
  blacklist,
  is: 'button',
  fontWeight: 'bold',
};

const BG = BackgroundImage.extend`
  ${({ disabled }) => disabled && 'opacity: 0.5;'}
  &:hover {
    ${({ disabled, hoverSrc }) => !disabled && `
      background-image: url(${hoverSrc});
    `}
  }
`;

const Base = ({
  onClick,
  to,
  ratio,
  src,
  hoverSrc,
  hoverColor,
  children,
  xOffset,
  disabled,
  ...props
}) => (
  <Box mx="auto" align="center" {...props}>
    <BG src={src} hoverSrc={hoverSrc} ratio={ratio} disabled={disabled}>
      <Button is={to && Link} to={to} onClick={onClick} hoverColor={hoverColor} disabled={disabled}>
        <Absolute top="50%" left="50%" transform="translate(-50%, -50%)">
          {xOffset ? <Box transform={`translateX(${xOffset})`}>{children}</Box> : children}
        </Absolute>
      </Button>
    </BG>
  </Box>
);

Base.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string,
  src: PropTypes.string,
  hoverSrc: PropTypes.string,
  hoverColor: PropTypes.string,
  ratio: PropTypes.number,
  children: PropTypes.node,
  xOffset: PropTypes.string,
  disabled: PropTypes.bool,
};

export const Button1 = (props) => <Base w="10em" src={button1} hoverSrc={button1Hover} ratio={72 / 228} {...props} />;
export const Button2 = (props) => <Base w="10em" src={button2} hoverSrc={button2Hover} hoverColor="background" ratio={72 / 227} xOffset="-0.5em" {...props} />;
export const Button3 = (props) => <Base m="auto" w="24em" src={button3} hoverSrc={button3Hover} ratio={89.129 / 411.43} {...props} />;

export default Button1;
