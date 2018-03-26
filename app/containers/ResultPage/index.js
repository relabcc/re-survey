import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import map from 'lodash/map';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectSurveyEmail,
  makeSelectQuizScore,
} from './selectors';

class ResultPage extends PureComponent {
  state = {
    skip: false,
  }

  handleToggle = (value) => {
    this.setState({ skip: !value });
  }

  render() {
    const { scores } = this.props;
    console.log(scores);
    return (
      <div>
      </div>
    );
  }
}

ResultPage.propTypes = {
  scores: PropTypes.shape({
    story: PropTypes.number,
    info: PropTypes.number,
    design: PropTypes.number,
  }),
};

const mapStateToProps = createStructuredSelector({
  scores: makeSelectQuizScore(),
  email: makeSelectSurveyEmail(),
});

export default connect(mapStateToProps)(ResultPage);
