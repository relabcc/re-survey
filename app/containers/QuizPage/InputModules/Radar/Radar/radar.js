/* eslint-disable no-mixed-operators */
/**
 * RadarChart (originaly from http://bl.ocks.org/chrisrzhou/2421ac6541b68c1680f8)
 * */

import set from 'lodash/set';
// import { scaleOrdinal } from 'd3-scale';
// import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { max } from 'd3-array';
import 'd3-transition';

const handleData = (json) => {
  const data = [];
  const groups = []; // track unique groups
  json.forEach((record) => {
    const { group } = record;
    if (groups.indexOf(group) < 0) {
      groups.push(group); // push to unique groups tracking
      data.push({ // push group node in data
        group,
        axes: [],
      });
    }
    data.forEach((d) => {
      if (d.group === record.group) { // push record data into right group in data
        d.axes.push({
          axis: record.axis,
          value: +record.value,
          description: record.description,
        });
      }
    });
  });
  return data;
};

const w = 300;
const h = 300;
// const over = 'ontouchstart' in window ? 'touchstart' : 'mouseover';
// const out = 'ontouchstart' in window ? 'touchend' : 'mouseout';

const baseConfig = {
  w,
  h,
  transition: 500,
  facet: false,
  levels: 4,
  levelScale: 0.85,
  labelScale: 1.0,
  facetPaddingScale: 2.5,
  maxValue: 0,
  radians: 2 * Math.PI,
  polygonAreaOpacity: 0.8,
  polygonStrokeOpacity: 1,
  polygonPointSize: 4,
  legendBoxSize: 10,
  translateX: w / 3,
  translateY: h / 3,
  paddingX: w,
  paddingY: h,
  colors: () => '#d1ccc7',
  showLevels: true,
  showLevelsLabels: false,
  showAxesLabels: true,
  showAxes: true,
  showLegend: true,
  showVertices: true,
  showPolygons: true,
};

class RadarChart {
  constructor(dom, json, options) {
    this.dom = dom;
    this.json = json;
    this.data = handleData(json);
    this.config = Object.assign(baseConfig, options);
    this.render();
  }

  vis = {
    svg: null,
    tooltip: null,
    levels: null,
    axis: null,
    vertices: null,
    legend: null,
    allAxis: null,
    total: null,
    radius: null,
  }

  events = {}

  on(key, cb) {
    this.events[key] = cb;
  }

  render() {
    // remove existing svg if exists
    select(this.dom).selectAll('svg').remove();
    this.updateConfig();

    if (this.config.facet) {
      this.data.forEach((d, i) => {
        this.buildVis([d]); // build svg for each data group

        // override colors
        this.vis.svg.selectAll('.polygon-areas')
          .attr('stroke', this.config.colors(i))
          .attr('fill', this.config.colors(i));
        this.vis.svg.selectAll('.polygon-vertices')
          .attr('fill', this.config.colors(i));
        this.vis.svg.selectAll('.legend-tiles')
          .attr('fill', this.config.colors(i));
      });
    } else {
      this.buildVis(this.data); // build svg
    }
  }

  updateConfig() {
    // adjust config parameters
    this.config.maxValue = Math.max(this.config.maxValue, max(this.data, (d) => max(d.axes, (o) => o.value)));
    this.config.w *= this.config.levelScale;
    this.config.h *= this.config.levelScale;
    this.config.paddingX = this.config.w * this.config.levelScale;
    this.config.paddingY = this.config.h * this.config.levelScale;

    // if facet required:
    if (this.config.facet) {
      this.config.w /= this.data.length;
      this.config.h /= this.data.length;
      this.config.paddingX /= (this.data.length / this.config.facetPaddingScale);
      this.config.paddingY /= (this.data.length / this.config.facetPaddingScale);
      this.config.polygonPointSize *= 0.9 ** this.data.length;
    }
  }

  // build visualization using the other build helper functions
  buildVis() {
    this.buildVisComponents();
    this.buildCoordinates();
    if (this.config.showLevels) this.buildLevels();
    if (this.config.showLevelsLabels) this.buildLevelsLabels();
    if (this.config.showAxes) this.buildAxes();
    if (this.config.showAxesLabels) this.buildAxesLabels();
    // if (this.config.showLegend) this.buildLegend();
    // if (this.config.showVertices) this.buildVertices();
    this.buildDots();
    this.buildPolygons();
  }

  updateValue(value, index) {
    set(this.data, [0, 'axes', index, 'value'], value + 1);
    const onChange = this.events.change;
    if (onChange) onChange(this.data[0].axes);
    this.updateVis();
  }

  updateVis() {
    this.buildCoordinates();
    // this.updateVertices();
    this.updatePolygons();
  }

  // build main vis components
  buildVisComponents() {
    // update vis parameters
    this.vis.allAxis = this.data[0].axes.map((i) => i.axis);
    this.vis.totalAxes = this.vis.allAxis.length;
    this.vis.radius = Math.min(this.config.w / 2, this.config.h / 2);

    // create main vis svg
    this.vis.svg = select(this.dom)
      .append('svg').classed('svg-vis', true)
      .attr('viewBox', `0 0 ${this.config.w + this.config.paddingX} ${this.config.h + this.config.paddingY}`)
      .append('svg:g')
      .attr('transform', `translate(${this.config.translateX},${this.config.translateY})`);

    // create levels
    this.vis.levels = this.vis.svg.selectAll('.levels')
      .append('svg:g').classed('levels', true);

    // create axes
    this.vis.axes = this.vis.svg.selectAll('.axes')
      .append('svg:g').classed('axes', true);

    // create vertices
    this.vis.vertices = this.vis.svg.selectAll('.vertices');

    // Initiate Legend
    this.vis.legend = this.vis.svg.append('svg:g').classed('legend', true)
      .attr('height', this.config.h / 2)
      .attr('width', this.config.w / 2)
      .attr('transform', `translate(${0}, ${1.1 * this.config.h})`);
  }


  // builds out the levels of the spiderweb
  buildLevels() {
    for (let level = 0; level < this.config.levels; level += 1) {
      const levelFactor = this.vis.radius * ((level + 1) / this.config.levels);

      // build level-lines
      this.vis.levels
        .data(this.vis.allAxis).enter()
        .append('svg:line').classed('level-lines', true)
        .attr('x1', (d, i) => levelFactor * (1 - Math.sin(i * this.config.radians / this.vis.totalAxes)))
        .attr('y1', (d, i) => levelFactor * (1 - Math.cos(i * this.config.radians / this.vis.totalAxes)))
        .attr('x2', (d, i) => levelFactor * (1 - Math.sin((i + 1) * this.config.radians / this.vis.totalAxes)))
        .attr('y2', (d, i) => levelFactor * (1 - Math.cos((i + 1) * this.config.radians / this.vis.totalAxes)))
        .attr('transform', `translate(${this.config.w / 2 - levelFactor}, ${this.config.h / 2 - levelFactor})`)
        .attr('stroke', 'gray')
        .attr('stroke-width', '0.5px');
    }
  }

  // builds out the levels of the spiderweb
  buildDots() {
    for (let level = 0; level < this.config.levels; level += 1) {
      const levelFactor = this.vis.radius * ((level + 1) / this.config.levels);

      // build level-lines
      this.vis.levels
        .data(this.vis.allAxis).enter()
        .append('svg:circle').classed('level-dot', true)
        .attr('cx', (d, i) => levelFactor * (1 - Math.sin(i * this.config.radians / this.vis.totalAxes)))
        .attr('cy', (d, i) => levelFactor * (1 - Math.cos(i * this.config.radians / this.vis.totalAxes)))
        .attr('transform', `translate(${this.config.w / 2 - levelFactor}, ${this.config.h / 2 - levelFactor})`)
        .attr('fill', 'gray')
        .attr('opacity', 0)
        .on('click', (d, i) => {
          this.updateValue(level, i);
        });
    }
  }

  // builds out the levels labels
  buildLevelsLabels() {
    for (let level = 0; level < this.config.levels; level += 1) {
      const levelFactor = this.vis.radius * ((level + 1) / this.config.levels);

      // build level-labels
      this.vis.levels
        .data([1]).enter()
        .append('svg:text').classed('level-labels', true)
        .text((this.config.maxValue * (level + 1) / this.config.levels).toFixed(2))
        .attr('x', () => levelFactor * (1 - Math.sin(0)))
        .attr('y', () => levelFactor * (1 - Math.cos(0)))
        .attr('transform', `translate(${this.config.w / 2 - levelFactor + 5}, ${this.config.h / 2 - levelFactor})`)
        .attr('fill', 'gray')
        .attr('font-family', 'sans-serif')
        .attr('font-size', `${10 * this.config.labelScale}px`);
    }
  }

  // builds out the axes
  buildAxes() {
    this.vis.axes
      .data(this.vis.allAxis).enter()
      .append('svg:line').classed('axis-lines', true)
      .attr('x1', this.config.w / 2)
      .attr('y1', this.config.h / 2)
      .attr('x2', (d, i) => this.config.w / 2 * (1 - Math.sin(i * this.config.radians / this.vis.totalAxes)))
      .attr('y2', (d, i) => this.config.h / 2 * (1 - Math.cos(i * this.config.radians / this.vis.totalAxes)))
      .attr('stroke', 'grey')
      .attr('stroke-width', '1px');
  }

  // builds out the axes labels
  buildAxesLabels() {
    this.vis.axes
      .data(this.vis.allAxis).enter()
      .append('svg:text').classed('axis-labels', true)
      .text((d) => d)
      .attr('text-anchor', 'middle')
      .attr('x', (d, i) => this.config.w / 2 * (1 - 1.3 * Math.sin(i * this.config.radians / this.vis.totalAxes)))
      .attr('y', (d, i) => this.config.h / 2 * (1 - 1.1 * Math.cos(i * this.config.radians / this.vis.totalAxes)))
      .attr('font-family', 'sans-serif')
      .attr('font-size', `${11 * this.config.labelScale}px`);
  }


  // builds [x, y] coordinates of polygon vertices.
  buildCoordinates() {
    this.data.forEach((group) => {
      group.axes.forEach((d, i) => {
        Object.assign(d, {
          coordinates: { // [x, y] coordinates
            x: this.config.w / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / this.config.maxValue) * Math.sin(i * this.config.radians / this.vis.totalAxes)),
            y: this.config.h / 2 * (1 - (parseFloat(Math.max(d.value, 0)) / this.config.maxValue) * Math.cos(i * this.config.radians / this.vis.totalAxes)),
          },
        });
      });
    });
  }

  // builds out the polygon vertices of the dataset
  buildVertices() {
    this.data.forEach((group, g) => {
      this.vis.vertices
        .data(group.axes).enter()
        .append('svg:circle').classed('polygon-vertices', true)
        .attr('r', this.config.polygonPointSize)
        .attr('cx', (d) => d.coordinates.x)
        .attr('cy', (d) => d.coordinates.y)
        .attr('fill', this.config.colors(g));
    });
  }

  updateVertices() {
    this.data.forEach((group) => {
      this.vis.svg
        .selectAll('.polygon-vertices')
        .data(group.axes)
        .transition(this.config.transition)
        .attr('cx', (d) => d.coordinates.x)
        .attr('cy', (d) => d.coordinates.y);
    });
  }

  // builds out the polygon areas of the dataset
  buildPolygons() {
    this.vis.vertices
      .data(this.data).enter()
      .append('svg:polygon').classed('polygon-areas', true)
      .attr('points', this.buildPolygonPoints)
      .attr('stroke-width', '2px')
      .attr('stroke', (d, i) => this.config.colors(i))
      .attr('fill', (d, i) => this.config.colors(i))
      .attr('fill-opacity', this.config.polygonAreaOpacity)
      .attr('stroke-opacity', this.config.polygonStrokeOpacity)
      .attr('pointer-events', 'none');
  }

  updatePolygons() {
    this.vis.svg
      .selectAll('.polygon-areas')
      .data(this.data)
      .transition(this.config.transition)
      .attr('points', this.buildPolygonPoints);
  }

  buildPolygonPoints = (group) => { // build verticesString for each group
    let verticesString = '';
    group.axes.forEach((d) => { verticesString += `${d.coordinates.x},${d.coordinates.y} `; });
    return verticesString;
  }

  // builds out the legend
  buildLegend() {
    // Create legend squares
    this.vis.legend.selectAll('.legend-tiles')
      .data(this.data).enter()
      .append('svg:rect')
      .classed('legend-tiles', true)
      .attr('x', this.config.w - this.config.paddingX / 2)
      .attr('y', (d, i) => i * 2 * this.config.legendBoxSize)
      .attr('width', this.config.legendBoxSize)
      .attr('height', this.config.legendBoxSize)
      .attr('fill', (d, g) => this.config.colors(g));

    // Create text next to squares
    this.vis.legend.selectAll('.legend-labels')
      .data(this.data).enter()
      .append('svg:text')
      .classed('legend-labels', true)
      .attr('x', this.config.w - this.config.paddingX / 2 + (1.5 * this.config.legendBoxSize))
      .attr('y', (d, i) => i * 2 * this.config.legendBoxSize)
      .attr('dy', `${0.07 * this.config.legendBoxSize}em`)
      .attr('font-size', `${11 * this.config.labelScale}px`)
      .attr('fill', 'gray')
      .text((d) => d.group);
  }
}

export default RadarChart;
