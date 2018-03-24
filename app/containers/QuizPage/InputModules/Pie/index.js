import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import Box from 'components/Box';
import Relative from 'components/Relative';
import Absolute from 'components/Absolute';
import BackgroundImage from 'components/BackgroundImage';
import Legs from 'components/Legs';
import DragMe from 'components/DragMe';

import legend from './legend.svg';
import PieInput from './Pie';

class Pie extends PureComponent {
  constructor(props) {
    super(props);
    const { length } = props.options;
    this.defaultValue = props.defaultValue || fromJS(new Array(length).fill(100 / length));
  }

  handleOnChange = (values) => {
    const { onChange } = this.props;
    if (onChange) onChange(fromJS(values));
  }

  render() {
    const { options } = this.props;
    return (
      <Box pl="10%" mt={['4em', null, '6em']} mb={['4em', null, '6em']}>
        <Relative>
          <DragMe top="-10%" right="10%" w="15%" />
          <Absolute bottom="-11%" left="55%" w="25%" transform="translateX(-60%)">
            <Legs />
          </Absolute>
          <Absolute bottom="5%" left="0" w="22%">
            <BackgroundImage ratio={184.91 / 184.87} src={legend} />
          </Absolute>
          <Relative pl="25%" pr="15%">
            <PieInput
              position="relative"
              options={options}
              values={this.defaultValue.toJS()}
              onChange={this.handleOnChange}
            />
          </Relative>
        </Relative>
      </Box>
    );
  }
}

Pie.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.shape(),
  onChange: PropTypes.func,
};

export default Pie;
