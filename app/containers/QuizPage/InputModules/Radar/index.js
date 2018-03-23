import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';

import Relative from 'components/Relative';
import Legs from 'components/Legs';
import Absolute from 'components/Absolute';
import { scoreBase } from 'quizReducer';

import RadarInput from './Radar';

class Radar extends PureComponent {
  handleOnChange = (values) => {
    const { axes } = this.props;
    this.scores = Object.assign({}, scoreBase);
    values.forEach((v, i) => {
      const axis = axes[i];
      axis.scores.forEach((key) => {
        this.scores[key] += (values[i] - 1);
      });
    });
    console.log(this.scores);
  }

  render() {
    const { axes } = this.props;
    return (
      <Relative>
        <Absolute bottom="15.5%" left="50%" w="25%" transform="translateX(-60%)">
          <Legs />
        </Absolute>
        <ContainerDimensions>
          {({ width }) => (
            <RadarInput
              position="relative"
              width={width}
              data={axes.map(({ label }) => ({
                axis: label,
                group: 'a',
                value: 1,
              }))}
              onChange={this.handleOnChange}
            />
          )}
        </ContainerDimensions>
      </Relative>
    );
  }
}

Radar.propTypes = {
  axes: PropTypes.array,
};

export default Radar;
