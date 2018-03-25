import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';
import Text from './Text';
import Underline from './Underline';

const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  letter-spacing: 0.15em;
  &:focus {
    outline: none;
  }
`;

class TextInput extends PureComponent {
  state = {
    value: this.props.defaultValue || '',
  }

  handleOnChange = ({ target: { value } }) => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) onChange(value);
  }

  render() {
    const { defaultValue, onChange, onBlur, error, disabled, ...props } = this.props;
    const { value } = this.state;
    return (
      <Box {...props}>
        <Underline.inline.black w="20em" opacity={disabled ? 0.3 : 1}>
          <Input
            value={value}
            disabled={disabled}
            onChange={this.handleOnChange}
            onBlur={() => onBlur && onBlur(value)}
          />
        </Underline.inline.black>
        {error && <Text>{error}</Text>}
      </Box>
    );
  }
}

TextInput.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.node,
  disabled: PropTypes.bool,
};

export default TextInput;
