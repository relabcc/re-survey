import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hammer from 'hammerjs';
import round from 'lodash/round';
import clamp from 'lodash/clamp';

import Absolute from 'components/Absolute';
import Transform from 'components/Transform';

import DragToRotate from '../utils/DragToRotate';

const getAngle = (value, hours) => {
  const base = hours ? 12 * 60 : 60;
  return ((value % base) / base) * 360;
};

const Tick = Transform.extend`
  position: absolute;
  top: 55%;
  left: 50%;
  background-color: currentColor;
  transform-origin: 50% 90%;
  ${({ draggable }) => draggable && 'cursor: pointer;'}
`;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.setContants();
    const value = this.clamp(props.value * this.unit);
    this.state = {
      value,
      displayValue: value / this.unit,
    };
  }

  componentDidMount() {
    this.dragging = new DragToRotate(this.getOrigin());
    this.hammertime = new Hammer(this.tick);
    this.hammertime.on('panmove', this.handleDrag);
  }

  setContants = (props = this.props) => {
    const {
      precision,
      min,
      max,
      hours,
    } = props;
    this.threshold = 30;
    this.unit = hours ? 60 : 1;
    this.format = (v) => round(v, precision);
    this.clamp = (v) => clamp(v, min * this.unit, max * this.unit);
  }

  setValue = (offset, cb) => {
    const value = this.clamp(this.state.value + offset);
    const displayValue = this.format(value / this.unit);
    this.setState({ value, displayValue }, cb);
  }

  getOrigin = () => {
    const {
      left,
      top,
      right,
      bottom,
    } = this.container.getBoundingClientRect();
    return [(left + right) / 2, (top + bottom) / 2];
  }

  handleDrag = ({ center: { x, y } }) => {
    const { onChange, hours } = this.props;
    const target = this.dragging.parseDrag([x, y]);
    const offset = this.format(target * 60 * (hours ? 12 : 1));
    this.setValue(offset, () => {
      if (onChange) onChange(this.state.displayValue);
    });
  }

  render() {
    const {
      hours,
    } = this.props;
    const { value } = this.state;
    return (
      <Absolute innerRef={(ref) => { this.container = ref; }} top="0" left="0" right="0" bottom="0">
        <Tick
          w="0.75em"
          height="33%"
          draggable={hours}
          zIndex={+hours}
          innerRef={(ref) => { if (hours) this.tick = ref; }}
          translateX="-50%"
          translateY="-100%"
          rotate={getAngle(value, true)}
        />
        <Tick
          w="0.5em"
          height="45%"
          draggable={!hours}
          zIndex={+!hours}
          innerRef={(ref) => { if (!hours) this.tick = ref; }}
          translateX="-50%"
          translateY="-100%"
          rotate={getAngle(value)}
        />
      </Absolute>
    );
  }
}

Clock.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  hours: PropTypes.bool,
  showArea: PropTypes.bool,
  precision: PropTypes.number,
  border: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
};

Clock.defaultProps = {
  value: 0,
  border: '2px solid black',
  precision: 0,
  min: 0,
  max: Infinity,
};

export default Clock;
