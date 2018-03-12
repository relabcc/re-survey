import kebabCase from 'lodash/kebabCase';
import isNil from 'lodash/isNil';

import getColor from './getColor';

export default (key, color) =>
  (props) => !isNil(props[key]) && `${kebabCase(key)}: ${color ? getColor(props[key])(props) : props[key]};`;
