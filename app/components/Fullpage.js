import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
// import config from 'config';

const FlexibleFlex = Box.extend`
  display: flex;
  text-align: left;
  align-items: ${({ align }) => align};
  flex-direction: column;
  min-height: 100vh;
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
      // minHeight: getComputedStyle && parseInt(getComputedStyle(this.container).minHeight, 10),
    });
  }

  render() {
    const {
      children,
      align,
      justify,
      hideFooter,
      ...props
    } = this.props;
    const { dimensions: { height } } = this.state;
    return (
      <Box position="relative" {...props}>
        <FlexibleFlex
          innerRef={(ref) => { this.container = ref; }}
          shouldCenter={typeof window !== 'undefined' && window.innerHeight > height - 1}
          align={align}
          justify={justify}
          hideFooter={hideFooter}
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
  hideFooter: PropTypes.bool,
};

Fullpage.defaultProps = {
  align: 'center',
  justify: 'center',
};

export default Fullpage;
