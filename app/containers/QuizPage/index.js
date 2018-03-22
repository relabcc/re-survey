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

const logoW = '14em';

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
          <Logo
            bg="black"
            color="background"
            align="center"
            w={logoW}
          >資訊肥胖症檢測</Logo>
          <Steps px="1em" current={current} />
          <Box w={[0, null, logoW]} />
        </Flex>
        <Fullpage>
          <Container px="4em" py="8em" align="center">
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
