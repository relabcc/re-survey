import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Box from './Box';
import Underline from './Underline';

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const LabelBox = Box.extend`
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  display: inline-block;
  position: relative;
  font-size: 1em;
  letter-spacing: 0.15em;
  .checkmark {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1.6em;
    width: 1.5em;
    font-size: 1em;
    box-sizing: border-box;
    border: 1px solid black;
    border-width: 0.3em 0.4em 0.35em 0.4em;
    border-radius: 0.7em 0.5em 0.6em 0.5em;
    &:after {
      content: "";
      position: absolute;
      left: -0.34em;
      top:  -0.3em;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background: black;
    }
  }
  input:checked + .checkmark {
    background: black;
  }
`;

function Checkbox({
  children,
  error,
  onChange,
  checked,
  noUnderline,
  disabled,
  ...props
}) {
  return (
    <Box {...props}>
      <LabelBox w={1} pl="2.5em" pr="1em" is="label" disabled={disabled} opacity={disabled ? 0.3 : 1}>
        <InputCheckbox onChange={onChange} checked={checked} disabled={disabled} />
        <span className="checkmark" />
        <Box w={1} is={noUnderline ? undefined : Underline.forCheckbox} align="left" pl={noUnderline && '0.5em'}>
          {children}
        </Box>
      </LabelBox>
    </Box>
  );
}


Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  noUnderline: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Checkbox;

