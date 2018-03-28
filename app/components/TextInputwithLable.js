import React from 'react';
import PropTypes from 'prop-types';

import Flex from './Flex';
import Box from './Box';
import Underline from './Underline';
import TextInput from './TextInput';

const TextInputwithLable = ({
  disabled,
  error,
  onChange,
  onBlur,
  defaultValue,
  name,
  children,
  placeholder,
  ...props
}) => (
  <Flex is="label" my="2em" flexWrap="wrap" {...props}>
    <Box w={[1, null, 1 / 2]} pr={[0, 0, '1em']} my="0.5em" opacity={disabled ? 0.3 : 1}>
      <Underline>{children}</Underline>
    </Box>
    <Box w={[1, null, 1 / 2]} pl={[0, 0, '1em']} my="0.5em">
      <TextInput
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
      />
    </Box>
  </Flex>
);

TextInputwithLable.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default TextInputwithLable;
