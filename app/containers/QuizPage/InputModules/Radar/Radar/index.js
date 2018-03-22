import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from 'components/Box';

import RadarChart from './radar';

const StyledContainer = Box.extend`
svg {
  width: 100%;
  height: auto;
}
.level-dot {
  transition: all 0.25s ease;
  cursor: pointer;
  r: 6;
  &:hover {
    opacity: 0.8;
  }
}
`;

class Radar extends PureComponent {
  state = {
    values: [],
  }

  componentDidMount() {
    const { data } = this.props;
    this.chart = new RadarChart(this.container, data, {
      maxValue: 4,
    });
    this.chart.on('change', this.handleOnChange);
  }

  handleOnChange = (values) => {
    this.setState({ values: values.map((d) => d.value) });
  }

  render() {
    const { data, ...props } = this.props;
    return (
      <Box align="center" {...props}>
        <StyledContainer innerRef={(ref) => { this.container = ref; }} />
      </Box>
    );
  }
}

Radar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    group: PropTypes.string,
    axis: PropTypes.string,
    value: PropTypes.number,
  })),
};

export default Radar;
