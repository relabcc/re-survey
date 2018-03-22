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
  padding-left: 3em;
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
      width: 0.4em;
      height: 0.4em;
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
  ...props
}) {
  return (
    <Box {...props}>
      <LabelBox is="label">
        <Input onChange={onChange} name={name} />
        <span className="checkmark" />
        <Underline w={['12em', '12em', null, '10em']} align="left" pl="1em">
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
};

export default Checkbox;

