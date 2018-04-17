import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContainerDimensions from 'react-container-dimensions';

import BackgroundImage from '../BackgroundImage';
import Relative from '../Relative';
import Absolute from '../Absolute';
import Box from '../Box';

const BG = (props) => (
  <BackgroundImage
    is={Absolute}
    left="0"
    right="0"
    {...props}
  />
);

class BubbleBase extends PureComponent {
  constructor(props) {
    super(props);
    this.FillComp = styled(props.fill)`
      position: absolute;
    `;
  }

  render() {
    const { FillComp } = this;
    const { children, topSrc, bottomSrc, ratio, fill, ...props } = this.props;
    return (
      <Box>
        <Relative pt={`${ratio * 200}%`}>
          <ContainerDimensions>
            {({ width }) => {
              const offset = (width * ratio) - 1;
              return (
                <div>
                  <BG top="0" src={topSrc} ratio={ratio} />
                  <BG bottom="0" src={bottomSrc} ratio={ratio} />
                  <FillComp width={width} style={{ top: offset, bottom: offset }} />
                  <Relative mt={`-${ratio * 200}%`} pt={`${ratio * 50}%`} pb={`${ratio * 50}%`} align="center">
                    <ContainerDimensions>
                      {(inner) => {
                        const gap = (width * ratio * 2) - inner.height;
                        return (
                          <Box
                            fontWeight="bold"
                            f="1.25em"
                            px="5%"
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
  }
}

BubbleBase.propTypes = {
  children: PropTypes.node,
  topSrc: PropTypes.string,
  bottomSrc: PropTypes.string,
  fill: PropTypes.func,
  ratio: PropTypes.number,
};

export default BubbleBase;
