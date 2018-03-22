import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import tag from 'clean-tag';

import Box from '../Box';
import Absolute from '../Absolute';
import BackgroundImage from '../BackgroundImage';

import blacklist from '../utils/blacklist';
import getColor from '../utils/getColor';
import button1 from './button-1.svg';
import button1Hover from './button-1-hover.svg';
import button2 from './button-2.svg';
import button2Hover from './button-2-hover.svg';
import button3 from './button-3.svg';
import button3Hover from './button-3-hover.svg';

const Button = styled(tag.button)`
  padding: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-family: inherit;
  &:hover {
    ${(props) => props.hoverColor && `color: ${getColor(props.hoverColor)(props)};`}
  }
`;

Button.defaultProps = {
  blacklist,
};

const BG = BackgroundImage.extend`
  &:hover {
    background-image: url(${({ hoverSrc }) => hoverSrc});
  }
`;

const Base = ({ onClick, to, ratio, src, hoverSrc, hoverColor, children, ...props }) => (
  <Box mx="auto" align="center" {...props}>
    <BG src={src} hoverSrc={hoverSrc} ratio={ratio}>
      <Button is={to && Link} to={to} onClick={onClick} hoverColor={hoverColor}>
        <Absolute top="50%" left="50%" transform="translate(-50%, -50%)">
          {children}
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
};

export const Button1 = (props) => <Base w="10em" src={button1} hoverSrc={button1Hover} ratio={72 / 228} {...props} />;
export const Button2 = (props) => <Base w="10em" src={button2} hoverSrc={button2Hover} hoverColor="background" ratio={72 / 227} {...props} />;
export const Button3 = (props) => <Base m="auto" w="24em" src={button3} hoverSrc={button3Hover} hoverColor="background" ratio={89.129 / 411.43} {...props} />;

export default Button1;
