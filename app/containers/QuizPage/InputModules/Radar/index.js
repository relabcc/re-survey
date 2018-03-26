import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';
import { fromJS, List } from 'immutable';

import Box from 'components/Box';
import Relative from 'components/Relative';
import Legs from 'components/Legs';
import Absolute from 'components/Absolute';
import DragMe from 'components/DragMe';

import RadarInput from './Radar';

class Radar extends PureComponent {
  constructor(props) {
    super(props);
    this.defaultValue = props.defaultValue || new List();
  }

  handleOnChange = (values) => {
    const { onChange } = this.props;
    if (onChange) onChange(fromJS(values));
  }

  render() {
    const { axes } = this.props;
    return (
      <Box px={[0, 0, '10%']}>
        <Relative>
          <DragMe.click top="10%" right="15%" w="20%" />
          <Absolute bottom="15.5%" left="50%" w="25%" transform="translateX(-60%)">
            <Legs />
          </Absolute>
          <ContainerDimensions>
            {({ width }) => (
              <RadarInput
                position="relative"
                width={width}
                data={axes.map(({ label }, index) => ({
                  axis: label,
                  group: 'a',
                  value: this.defaultValue.get(index) || 1,
                }))}
                onChange={this.handleOnChange}
                clickable
              />
            )}
          </ContainerDimensions>
        </Relative>
      </Box>
    );
  }
}

Radar.propTypes = {
  axes: PropTypes.array,
  defaultValue: PropTypes.shape(),
  onChange: PropTypes.func,
};

export default Radar;
