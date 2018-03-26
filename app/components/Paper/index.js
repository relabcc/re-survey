import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ContainerDimensions from 'react-container-dimensions';

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
  margin-top: -1px;
  margin-bottom: -1px;
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

const Paper = ({ children, maxHeight, ...props }) => (
  <div>
    <ContainerDimensions>
      {({ width }) => {
        const borderWidth = width / 100;
        return (
          <DecoBorder py="1%" {...props}>
            <Border
              px="2em"
              py="2em"
              bg="background"
              borderWidth={borderWidth}
              borderTop="transparent"
              borderBottom="transparent"
              overflowY={maxHeight && 'auto'}
              style={{ maxHeight }}
            >
              {children}
            </Border>
          </DecoBorder>
        );
      }}
    </ContainerDimensions>
  </div>
);

Paper.propTypes = {
  children: PropTypes.node,
  maxHeight: PropTypes.string,
};

export default Paper;
