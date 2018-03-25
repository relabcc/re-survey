import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import FixedLogo from 'components/FixedLogo';
import Steps from 'components/Steps';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';

import Quiz from './Quiz';

const idPath = 'match.params.id';

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
    const current = id - 1;
    return (
      <div>
        <FixedLogo>
          <Steps px="1em" current={current} />
        </FixedLogo>
        <Fullpage>
          <Container px={['1.5em', null, '4em']} pt={['6em', null, '8em']} align="center">
            <Quiz key={current} index={current} />
          </Container>
        </Fullpage>
      </div>
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
