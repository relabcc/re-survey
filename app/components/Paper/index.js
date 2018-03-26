import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ContainerDimensions from 'react-container-dimensions';

import Box from '../Box';
import Relative from '../Relative';
import Border from '../Border';

import lower from './paper-bottom.svg';

const deco = css`
  content: url(${lower});
  display: block;
  position: absolute;
  left: 0;
  right: 0;
`;

const DecoBorder = styled(Relative)`
  &:before {
    ${deco}
    top: 0;
    transform: rotate(180deg);
  }
  &:after {
    ${deco}
    bottom: 0;
  }
`;

const PaperBorder = styled(Border)`
  border-top: none;
  border-bottom: none;
`;

const Paper = ({ children, ...props }) => (
  <ContainerDimensions>
    {({ width }) => {
      const borderWidth = width * 0.01;
      return (
        <DecoBorder py="1%" {...props}>
          <PaperBorder borderWidth={borderWidth}>
            <Box px="2em" py="2em">{children}</Box>
          </PaperBorder>
        </DecoBorder>
      );
    }}
  </ContainerDimensions>
);

Paper.propTypes = {
  children: PropTypes.node,
};

export default Paper;
