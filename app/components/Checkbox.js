import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Box from './Box';
import Underline from './Underline';

const Input = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const LabelBox = Box.extend`
  cursor: pointer;
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
    font-size: 1.25em;
    box-sizing: border-box;
    border: 1px solid black;
    border-width: 7px 8px 8px 7px;
    border-radius: 8px 15px 8px 16px;
    &:after {
      content: "";
      position: absolute;
      left: -0.31em;
      top:  -0.32em;
      width: 0.375em;
      height: 0.375em;
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
  name,
  error,
  onChange,
  checked,
  ...props
}) {
  return (
    <Box {...props}>
      <LabelBox w={1} pl="2.5em" pr="1em" is="label">
        <Input onChange={onChange} name={name} checked={checked} />
        <span className="checkmark" />
        <Underline w={1} align="left">
          {children}
        </Underline>
      </LabelBox>
    </Box>
  );
}


Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Checkbox;

