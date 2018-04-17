import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class MdBold extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  getMatches = (string, regex) => {
    const matches = [];
    let match;
    for (match = regex.exec(string); match; match = regex.exec(string)) {
      const text = match[1];
      const { index } = match;
      matches.push({
        text,
        index,
        lastIndex: index + (text.length + 2),
      });
    }
    return matches;
  }

  parseCounter = 0

  parseString = (string) => {
    const elements = [];
    if (string === '') {
      return elements;
    }

    const matches = this.getMatches(string, /\[([^\]]*)\]/g);
    if (!matches) {
      return string;
    }

    let lastIndex = 0;

    matches.forEach((match, idx) => {
      // Push the preceding text if there is any
      if (match.index > lastIndex) {
        elements.push(string.substring(lastIndex, match.index));
      }
      // Shallow update values that specified the match
      const props = {
        key: `parse${this.parseCounter}match${idx}`,
      };

      elements.push(React.createElement(
        Text.bold,
        props,
        match.text
      ));
      lastIndex = match.lastIndex;
    });

    if (lastIndex < string.length) {
      elements.push(string.substring(lastIndex));
    }

    return (elements.length === 1) ? elements[0] : elements;
  }

  render() {
    const { children, ...props } = this.props;
    const parsedChildren = this.parseString(this.props.children);

    return <Text {...props}>{parsedChildren}</Text>;
  }
}

export default MdBold;
