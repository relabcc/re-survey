import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ConatianerDiemnsions from 'react-container-dimensions';

import Text from 'components/Text';
import Box from 'components/Box';
import Absolute from 'components/Absolute';
import Relative from 'components/Relative';
import BackgroundImage from 'components/BackgroundImage';
import TurnMe from 'components/TurnMe';

import toPercent from 'utils/toPercent';

import ColckModule from './D3Clock';

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

  handleOnChange = (hr) => {
    const { onChange } = this.props;
    const hour = Math.round(hr);
    this.setState({ hour, touched: true });
    if (onChange) onChange(hour);
  }

  render() {
    const { variation, defaultValue } = this.props;
    const { hour, touched } = this.state;
    return (
      <Box mx={[0, 0, '5%']}>
        <Relative mt={['7em', '9em']} mb="2em">
          <BackgroundImage ratio={h / w} src={variations[variation]}>
            <TurnMe top={['-35%', '-27%']} left={toPercent(465 / w)} right={[toPercent(160 / w), toPercent(200 / w)]} />
            <Absolute left={toPercent(243.98 / w)} right={toPercent(243.98 / w)} top={toPercent(39.55 / h)}>
              <ConatianerDiemnsions>
                {({ width }) => (
                  <ColckModule
                    clockRadius={width * (3 / 8)}
                    clockPadding={width / 8}
                    onChange={this.handleOnChange}
                    hours
                    max={24}
                    defaultValue={+defaultValue}
                  />
                )}
              </ConatianerDiemnsions>
            </Absolute>
            <Absolute z={1} left={0} top={0} right={0} style={{ pointerEvents: 'none' }}>
              <BackgroundImage ratio={h / w} src={face} />
            </Absolute>
            <Absolute transform="translate(50%,-50%)" top={toPercent(96 / h)} right={toPercent(145 / w)}>
              <Text f={['1.25em', null, '1.5em']} fontWeight="bold" letterSpacing="0">
                {touched ? hour : defaultValue}
              </Text>
            </Absolute>
          </BackgroundImage>
        </Relative>
      </Box>
    );
  }
}

Clock.propTypes = {
  variation: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
};

Clock.defaultProps = {
  variation: 1,
  defaultValue: 0,
};

export default Clock;
