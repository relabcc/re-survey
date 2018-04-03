import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select, event } from 'd3-selection';
import { pie, arc } from 'd3-shape';
import { drag } from 'd3-drag';
import { format } from 'd3-format';

import Box from 'components/Box';
import DragToRotate, { radianToDegree } from '../utils/DragToRotate';

const StyledContainer = Box.extend`
  .pie-label {
    pointer-events: none;
  }
`;

const canDrag = (d, i) => i > 0;

class Pie extends Component {
  constructor(props) {
    super(props);
    this.values = props.values;
  }

  componentDidMount() {
    this.svg = select(this.container).append('svg');
    this.setContants();
    this.drawPie();
  }

  shouldComponentUpdate = false

  setContants = () => {
    this.width = this.container.getBoundingClientRect().width;
    this.height = this.width;
    this.svg.attr('viewBox', `0 0 ${this.width} ${this.width}`);
    this.radius = this.width / 2;
    const gap = this.radius / 10;
    this.base = this.svg.append('g').attr('transform', `translate(${this.radius},${this.radius})`);
    this.pie = pie().sort(null);
    this.outerRadius = this.radius - gap;
    this.path = arc()
      .outerRadius(this.outerRadius)
      .innerRadius(0);

    this.label = arc()
      .outerRadius(this.radius - (gap * 4))
      .innerRadius(this.radius - (gap * 4));

    this.dragging = new DragToRotate([this.radius, this.radius]);
  }

  updateValues = (index, delta) => {
    const { onChange } = this.props;
    const newValues = this.values.map((v, i) => {
      if (i === index - 1) {
        return v + delta;
      }
      if (i === index) {
        return v - delta;
      }
      return v;
    });
    if (newValues.every((n) => n > 0)) {
      this.values = newValues;
      if (onChange) onChange(this.values);
      this.updatePie();
    }
  }

  updatePie = () => {
    const newPie = this.pie(this.values);
    this.piePath
      .data(newPie)
      .attr('d', this.path);
    this.pieText
      .data(newPie)
      .text((d) => format('.1%')(d.value / 100))
      .attr('transform', (d) => `translate(${this.label.centroid(d)})`);
    this.pieHandle
      .data(newPie)
      .filter((d, i) => i > 0)
      .attr('transform', (d) => `rotate(${radianToDegree(d.startAngle)})`);
  }

  drawPie = () => {
    const { options } = this.props;
    const arcGroup = this.base.selectAll('.arc')
      .data(this.pie(this.values))
      .enter()
      .append('g')
      .attr('class', 'arc');

    this.piePath = arcGroup.append('path')
      .attr('d', (d) => this.path(d))
      .attr('stroke', 'black')
      .attr('stroke-width', this.width / 70)
      .attr('fill', (d, i) => options[i].color);

    this.pieText = arcGroup.append('text')
      .attr('class', 'pie-label')
      .attr('text-anchor', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', this.width / 16)
      .attr('transform', (d) => `translate(${this.label.centroid(d)})`)
      .attr('dy', '0.35em')
      .text((d) => format('.1%')(d.value / 100));

    this.pieHandle = arcGroup.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 0)
      .attr('y2', -this.outerRadius + (this.width / 120))
      .attr('opacity', 0.5)
      .attr('class', (d, i) => i > 0 && 'pie-handle')
      .attr('stroke', 'white')
      .attr('cursor', 'pointer')
      .attr('stroke-width', this.radius / 30)
      .attr('transform', (d) => `rotate(${radianToDegree(d.startAngle)})`)
      .call(drag().filter(canDrag).container(this.container)
        .on('end', this.handleDragEnd)
        .on('drag', this.handleDrag));
  }

  handleDragEnd = () => {
    this.dragging.clear();
  }

  handleDrag = () => {
    const { x, y, subject: { index } } = event;
    const delta = this.dragging.parseDrag([x, y]);
    this.updateValues(index, delta * 60);
  }

  render() {
    const {
      values,
      options,
      onChange,
      ...props
    } = this.props;
    return (
      <Box align="center" {...props}>
        <StyledContainer innerRef={(ref) => { this.container = ref; }} />
      </Box>
    );
  }
}

Pie.propTypes = {
  options: PropTypes.array,
  values: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
};

export default Pie;
