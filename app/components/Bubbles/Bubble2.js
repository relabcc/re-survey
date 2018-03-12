import React from 'react';
import PropTypes from 'prop-types';

import ContainerDimensions from 'react-container-dimensions';

import BackgroundImage from '../BackgroundImage';
import Relative from '../Relative';
import Absolute from '../Absolute';
import Box from '../Box';

import bubbleHead from './bubble-2-head.svg';
import bubbleTop from './bubble-1-top.svg';
import bubbleBottom from './bubble-1-bottom.svg';
import bubbleStrokeTop from './bubble-2-top.svg';
import bubbleStrokeBottom from './bubble-2-bottom.svg';

const ratio = 90 / 775;
const strokeRatio = 90 / 778;
const strokeOffset = 16;

const BG = (props) => (
  <BackgroundImage
    is={Absolute}
    left="0"
    right="0"
    ratio={ratio}
    {...props}
  />
);

const Stroke = (props) => (
  <BackgroundImage
    is={Absolute}
    left={-strokeOffset}
    right={-strokeOffset}
    ratio={strokeRatio}
    {...props}
  />
);

const Bubble1 = ({ children, ...props }) => (
  <Box p={strokeOffset}>
    <Relative pt={`${ratio * 200}%`}>
      <ContainerDimensions>
        {({ width }) => {
          const offset = (width * ratio) - 1;
          return (
            <div>
              <Stroke top={-strokeOffset * strokeRatio * 2} src={bubbleStrokeTop} />
              <Stroke bottom={-strokeOffset * strokeRatio * 2} src={bubbleStrokeBottom} />
              <BG top="0" src={bubbleTop} />
              <BG bottom="0" src={bubbleBottom} />
              <Absolute left="0" right="0" bg="gray" style={{ top: offset, bottom: offset }} />
              <Relative mt={`-${ratio * 200}%`} pt={`${ratio * 50}%`} pb={`${ratio * 50}%`} align="center">
                <ContainerDimensions>
                  {(inner) => {
                    const gap = (width * ratio * 2) - inner.height;
                    return (
                      <Box
                        px="1em"
                        {...props}
                        transform={gap > 0 ? `translateY(${gap / 2}px)` : null}
                      >
                        {children}
                      </Box>
                    );
                  }}
                </ContainerDimensions>
              </Relative>
            </div>
          );
        }}
      </ContainerDimensions>
    </Relative>
  </Box>
);

Bubble1.propTypes = {
  children: PropTypes.node,
};

export default Bubble1;
