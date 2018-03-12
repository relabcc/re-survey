const PropTypes = require('prop-types');

export const responsive = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
]);

export const responsiveBoolean = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array,
]);

export const numberOrString = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);
