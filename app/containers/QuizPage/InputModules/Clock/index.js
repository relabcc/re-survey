import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Absolute from 'components/Absolute';
import Relative from 'components/Relative';
import BackgroundImage from 'components/BackgroundImage';

import toPercent from 'utils/toPercent';

import ColckModule from './Clock';

import clock1 from './clock-1.svg';
import clock2 from './clock-2.svg';
import face from './clock-face.svg';

const variations = {
  1: clock1,
  2: clock2,
};

const w = 821;
const h = 473;

class Clock extends PureComponent {
  state = {
    hour: 0,
  }

  handleOnChange = (hour) => this.setState({ hour })

  render() {
    const { variation } = this.props;
    const { hour } = this.state;
    return (
      <Relative my="2em">
        <BackgroundImage ratio={h / w} src={variations[variation]}>
          <Absolute left={toPercent(243.98 / w)} right={toPercent(243.98 / w)} top={toPercent(39.55 / h)}>
            <Relative pb="100%">
              <ColckModule onChange={this.handleOnChange} precision={1} hours max={24} />
            </Relative>
          </Absolute>
          <Absolute z={1} left={0} top={0} right={0} style={{ pointerEvents: 'none' }}>
            <BackgroundImage ratio={h / w} src={face} />
          </Absolute>
          <Absolute transform="translate(50%,-50%)" top={toPercent(96 / h)} right={toPercent(145 / w)}>
            <Text f="1.5em" fontWeight="bold" letterSpacing="0">
              {hour}
            </Text>
          </Absolute>
        </BackgroundImage>
      </Relative>
    );
  }
}

Clock.propTypes = {
  variation: PropTypes.number,
};

Clock.defaultProps = {
  variation: 1,
};

export default Clock;
