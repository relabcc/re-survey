import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import ReactGA from 'react-ga';

class ScrollToTop extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.pathname !== '/') {
      if (process.env.NODE_ENV === 'production') history.replace('/');
    } else ReactGA.pageview('/');
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
      ReactGA.pageview(location.pathname + location.search);
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
