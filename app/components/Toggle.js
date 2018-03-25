import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';

import Flex from './Flex';
import Underline from './Underline';

import Checkbox from './Checkbox';

class Toggle extends PureComponent {
  state = {
    value: isUndefined(this.props.defaultValue) ? true : this.props.defaultValue,
  }

  handleOnChange = (check) => (e) => {
    const { onChange } = this.props;
    const value = e.target.checked ? check : !check;
    this.setState({
      value,
    });
    if (onChange) onChange(value);
  }

  render() {
    const { onChange, defaultValue, labelTrue, labelFalse, ...props } = this.props;
    const { value } = this.state;
    return (
      <Flex is={Underline.black} justify="center" align="center" pb="0.75em" {...props}>
        <Checkbox noUnderline onChange={this.handleOnChange(true)} checked={value}>{labelTrue}</Checkbox>
        <Checkbox noUnderline onChange={this.handleOnChange(false)} checked={!value}>{labelFalse}</Checkbox>
      </Flex>
    );
  }
}

Toggle.propTypes = {
  defaultValue: PropTypes.bool,
  onChange: PropTypes.func,
  labelTrue: PropTypes.node.isRequired,
  labelFalse: PropTypes.node.isRequired,
};

export default Toggle;
