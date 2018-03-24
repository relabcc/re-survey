import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import Box from 'components/Box';
import Text from 'components/Text';
import Image from 'components/Image';
import Degree from 'components/Degree';

import legend from './legend.svg';

class DegreeModule extends PureComponent {
  state = {
    values: this.props.defaultValue || new List(),
  }

  handleOnChange = (index) => (value) => {
    const { onChange } = this.props;
    if (onChange) onChange(this.valueTransformer(index, value));
  }

  valueTransformer = (index, value) => {
    const values = this.state.values.set(index, value);
    this.setState({
      values,
    });
    return values;
  }

  render() {
    const {
      options,
      onChange,
      title,
      ...props
    } = this.props;

    const { values } = this.state;

    return (
      <Box py="1em" {...props}>
        <Box px="10%" mt="1em" mb="2em">
          <Image src={legend} />
        </Box>
        <Box>
          {options.map(({ label, ex }, index) => (
            <Degree
              key={index}
              my="0.25em"
              onChange={this.handleOnChange(index)}
              defaultValue={values.get(index)}
            >
              <Text>{label}</Text>
              <Text>{ex}</Text>
            </Degree>
          ))}
        </Box>
      </Box>
    );
  }
}

DegreeModule.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  defaultValue: PropTypes.shape(),
};

export default DegreeModule;
