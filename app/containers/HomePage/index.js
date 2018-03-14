import React from 'react';
import { Button3 } from 'components/Buttons';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import Flex from 'components/Flex';
import BackgroundImage from 'components/BackgroundImage';

import dr from './dr.svg';

const ratio = 651.54 / 719.94;

const BG = (props) => (
  <BackgroundImage
    left="0"
    right="0"
    ratio={ratio}
    {...props}
  />
);

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fullpage>
        <Container px="4em" align="center">
          <Flex flexDirection="column">
            <BG src={dr} my="2em"></BG>
            <Button3 to="/quiz/1">病久沒藥醫，速速檢測去</Button3>
          </Flex>
        </Container>
      </Fullpage>
    );
  }
}
