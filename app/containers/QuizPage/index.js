/*
 * QuizPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { Button2 } from 'components/Buttons';

import Q1 from './Q1';

const idPath = 'match.params.id';

const comps = {
  1: Q1,
};

class QuizPage extends React.PureComponent {
  state = {}

  componentWillReceiveProps(nextProps) {
    const prevId = get(this.props, idPath);
    if (prevId !== get(nextProps, idPath)) {
      this.setState({
        prevId,
      });
    }
  }

  render() {
    const id = get(this.props, idPath);
    const Quiz = comps[id] || null;
    return (
      <h1>
        {id}
        <Button2 to={`/quiz/${+id + 1}`}>Next</Button2>
        {Quiz && <Quiz />}
      </h1>
    );
  }
}

QuizPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default QuizPage;
