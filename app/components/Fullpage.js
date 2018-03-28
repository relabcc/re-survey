import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';

const FlexibleFlex = Box.extend`
  display: flex;
  text-align: left;
  align-items: ${({ align }) => align};
  flex-direction: column;
  ${({ shouldCenter }) => shouldCenter && `
    justify-content: center;
  `}
`;

class Fullpage extends PureComponent {
  state = {
    dimensions: {},
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize = () => {
    this.setState({
      dimensions: this.container.getBoundingClientRect(),
    });
  }

  render() {
    const {
      children,
      align,
      justify,
      ...props
    } = this.props;
    const { dimensions: { height } } = this.state;
    return (
      <Box position="relative" {...props}>
        <FlexibleFlex
          innerRef={(ref) => { this.container = ref; }}
          style={{ minHeight: window.innerHeight }}
          shouldCenter={typeof window !== 'undefined' && window.innerHeight > height - 1}
          align={align}
          justify={justify}
        >
          {children}
        </FlexibleFlex>
      </Box>
    );
  }
}

Fullpage.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
};

Fullpage.defaultProps = {
  align: 'center',
  justify: 'center',
};

export default Fullpage;
