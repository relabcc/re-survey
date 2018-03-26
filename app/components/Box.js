import styled from 'styled-components';
import tag from 'clean-tag';
import {
  responsiveStyle,
  space,
  width,
  display,
  textAlign,
  height,
  top,
  left,
  right,
  bottom,
  position,
  style,
  color,
  fontSize,
  fontWeight,
  borderRadius,
} from 'styled-system';

import injectProps from './utils/injectProps';
import blacklist from './utils/blacklist';

const injectTransform = responsiveStyle({
  prop: 'transform',
  cssProperty: 'transform',
});

const injectTransition = responsiveStyle({
  prop: 'transition',
  cssProperty: 'transition',
});

const injectOpacity = style({
  prop: 'opacity',
  cssProperty: 'opacity',
  alias: 'alpha',
});

const zIndex = style({
  prop: 'zIndex',
  cssProperty: 'zIndex',
  alias: 'z',
});

const StyledBox = styled(tag)`
  ${space}
  ${width}
  ${display}
  ${height}
  ${color}
  ${fontSize}
  ${injectProps('overflow')}
  ${injectProps('overflowX')}
  ${injectProps('overflowY')}
  ${position}
  ${zIndex}
  ${injectTransform}
  ${injectTransition}
  ${injectOpacity}
  ${textAlign}
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${fontWeight}
  ${borderRadius}
  ${({ onClick }) => onClick && 'cursor: pointer;'}
`;

StyledBox.defaultProps = {
  blacklist,
};

export default StyledBox;
