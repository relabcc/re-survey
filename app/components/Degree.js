import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import range from 'lodash/range';

import Box from './Box';
import Flex from './Flex';
import Underline from './Underline';

import { LabelBox, InputCheckbox } from './Checkbox';

class Degree extends PureComponent {
  state = {
    value: this.props.defaultValue || 0,
  }

  handleOnChange = (v) => (e) => {
    const { onChange } = this.props;
    const value = e.target.checked ? v + 1 : v;
    this.setState({
      value,
    });
    if (onChange) onChange(value);
  }

  render() {
    const { onChange, children, defaultValue, ...props } = this.props;
    const { value } = this.state;
    return (
      <Flex is={Underline} justify="space-between" align="center" {...props}>
        <Box align="left" mb="0.5em">{children}</Box>
        <Flex w="8em" mb="1em">
          {range(3).map((v, index) => (
            <LabelBox is="label" w="2em" mx="0.25em" key={index}>
              <InputCheckbox onChange={this.handleOnChange(v)} checked={v < value} />
              <span className="checkmark" />
            </LabelBox>
          ))}
        </Flex>
      </Flex>
    );
  }
}

Degree.propTypes = {
  defaultValue: PropTypes.number,
  children: PropTypes.node,
  onChange: PropTypes.func,
};

export default Degree;
