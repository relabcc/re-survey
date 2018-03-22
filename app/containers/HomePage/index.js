import React from 'react';
import { Button3 } from 'components/Buttons';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import BackgroundImage from 'components/BackgroundImage';

import dr from './dr.svg';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fullpage>
        <Container px={['1em', null, '4em']} align="center">
          <BackgroundImage ratio={651.54 / 719.94} src={dr} my="2em"></BackgroundImage>
          <Button3 to="/quiz/1">病久沒藥醫，速速檢測去</Button3>
        </Container>
      </Fullpage>
    );
  }
}
