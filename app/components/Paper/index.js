import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ContainerDimensions from 'react-container-dimensions';

import Box from '../Box';
import Relative from '../Relative';
import Border from '../Border';

import edge from './paper-bottom.svg';

const ratio = 12.47 / 600.15;

const deco = css`
  content: '';
  display: block;
  background-image: url(${edge});
  padding-bottom: ${ratio * 100}%;
  width: 100%;
`;

const DecoBorder = styled(Relative)`
  &::before {
    ${deco}
    transform: rotate(180deg);
  }
  &::after {
    ${deco}
  }
`;

const Paper = ({ children, ...props }) => (
  <div>
    <ContainerDimensions>
      {({ width }) => {
        const borderWidth = width / 120;
        return (
          <DecoBorder py="1%" {...props}>
            <Border borderWidth={borderWidth} borderTop="transparent" borderBottom="transparent">
              <Box px="2em" py="2em">{children}</Box>
            </Border>
          </DecoBorder>
        );
      }}
    </ContainerDimensions>
  </div>
);

Paper.propTypes = {
  children: PropTypes.node,
};

export default Paper;
