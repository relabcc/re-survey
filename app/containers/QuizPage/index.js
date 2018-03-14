import React from 'react';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { Button2 } from 'components/Buttons';
import Box from 'components/Box';

import Q1 from './Q1';
import Q2 from './Q2';
const idPath = 'match.params.id';

const comps = {
  1: Q1,
  2: Q2,
};

const Logo = Box.extend`
  background-color: black;
  color: white;
  display: inline-block;
  position: absolute;
  content '';
  top: 2em;
  left: 3em;
  padding: 0 2em;
  line-height: 2.4em;
  border-radius: 10em;
`;

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
      <Fullpage>
        <Container px="4em" align="center">
          <Logo>資訊肥胖症檢測</Logo>
          {/* {id} */}
          <Button2 position="absolute" bottom="2em" right="2em" to={`/quiz/${+id + 1}`}>
            下一題
          </Button2>
          {Quiz && <Quiz />}
        </Container>
      </Fullpage>
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
