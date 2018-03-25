import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import isArray from 'lodash/isArray';

import Box from './Box';
import Flex from './Flex';

import Checkbox from './Checkbox';

class CheckboxGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || (props.multiple ? new List() : null),
    };
  }

  handleOnChange = (index) => ({ target: { checked } }) => {
    const { onChange, multiple } = this.props;
    let value;
    if (multiple) {
      value = this.state.value.set(index, checked);
    } else {
      value = checked ? index : null;
    }
    this.setState({
      value,
    });
    if (onChange) onChange(value);
  }

  render() {
    const {
      onChange,
      defaultValue,
      options,
      perRow,
      multiple,
      noUnderline,
      disabled,
      ...props
    } = this.props;
    const { value } = this.state;
    return (
      <Flex flexWrap="wrap" {...props}>
        {options.map((label, index) => (
          <Box
            key={index}
            align="left"
            w={isArray(perRow) ? perRow.map((p) => 1 / p) : 1 / perRow}
            my={noUnderline ? '0.5em' : '0.25em'}
          >
            <Checkbox
              checked={multiple ? value.get(index) : value === index}
              onChange={this.handleOnChange(index)}
              noUnderline={noUnderline}
              disabled={disabled}
            >
              {label}
            </Checkbox>
          </Box>
        ))}
      </Flex>
    );
  }
}

CheckboxGroup.propTypes = {
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.array,
  perRow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  multiple: PropTypes.bool,
  noUnderline: PropTypes.bool,
  disabled: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  perRow: 2,
};

export default CheckboxGroup;
