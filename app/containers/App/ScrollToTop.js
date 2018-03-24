import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (process.env.NODE_ENV === 'production' && location.pathname !== '/') history.replace('/');
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  history: PropTypes.shape(),
  location: PropTypes.shape(),
  children: PropTypes.node,
};

export default withRouter(ScrollToTop);
