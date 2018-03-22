import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';
import RadarInput from './Radar';

class Radar extends PureComponent {
  render() {
    const { axes } = this.props;
    return (
      <Box>
        <RadarInput
          data={axes.map(({ label }) => ({
            axis: label,
            group: 'a',
            value: 1,
          }))}
        />
      </Box>
    );
  }
}

Radar.propTypes = {
  axes: PropTypes.array,
};

export default Radar;
