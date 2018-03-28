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
import legendM from './legend-mobile.svg';
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
      <Box pl={[0, 0, '10%']} mt={['4em', null, '6em']} mb={['1em', null, '6em']}>
        <Box px={[0, 0, '10%']}>
          <Relative>
            <DragMe top={['-10%', null, '-5%']} right={['5%', null, '8%']} w={['20%', null, '15%']} />
            <Absolute bottom={['-10%', null, '-11%']} left={['50%', null, '55%']} w="25%" transform="translateX(-60%)">
              <Legs />
            </Absolute>
            <Absolute display={['none', null, 'block']} bottom="5%" left="0" w="22%">
              <BackgroundImage ratio={184.91 / 184.87} src={legend} />
            </Absolute>
            <Relative pl={['15%', null, '25%']} pr="15%">
              <PieInput
                position="relative"
                options={options}
                values={this.defaultValue.toJS()}
                onChange={this.handleOnChange}
              />
            </Relative>
          </Relative>
          <Box display={['block', null, 'none']} mt="3em" px="2em">
            <BackgroundImage ratio={79.41 / 531.31} src={legendM} />
          </Box>
        </Box>
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
