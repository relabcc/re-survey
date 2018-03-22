import React from 'react';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Box from 'components/Box';
import Flex from 'components/Flex';
import Steps from 'components/Steps';

import Quiz from './Quiz';

const idPath = 'match.params.id';

const logoW = '20em';

const Logo = Box.extend`
  display: inline-block;
  line-height: 2.5;
  border-radius: 10em;
  max-width: ${logoW};
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
          <Box w={logoW}>
            <Logo
              px="1.5em"
              bg="black"
              color="background"
              align="center"
            >資訊肥胖症檢測</Logo>
          </Box>
          <Steps px="1em" current={current} />
          <Box w={[0, null, logoW]} />
        </Flex>
        <Fullpage>
          <Container px={['2em', null, '4em']} pt="8em" pb="4em" align="center">
            <Quiz index={current} />
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
