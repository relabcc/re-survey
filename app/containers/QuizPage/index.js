import React from 'react';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Box from 'components/Box';
import Flex from 'components/Flex';
import Steps from 'components/Steps';

import TitleLogo from './TitleLogo';
import Quiz from './Quiz';

const idPath = 'match.params.id';

const logoW = '14em';

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
        <Flex
          position="absolute"
          top={0}
          px={['1em', null, '2em']}
          w={1}
          align="center"
        >
          <Box w={logoW} pr={['1em', null, '2em']}>
            <TitleLogo />
          </Box>
          <Steps px="1em" current={current} />
          <Box w={[0, null, logoW]} />
        </Flex>
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
