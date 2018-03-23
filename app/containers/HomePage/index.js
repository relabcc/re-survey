import React from 'react';
import { Button3 } from 'components/Buttons';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import Image from 'components/Image';
import BackgroundImage from 'components/BackgroundImage';

import dr from './dr.svg';
import logo from './relab-logo.svg';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fullpage>
        <Container px={['1em', null, '4em']} align="center">
          <BackgroundImage ratio={653.13 / 740.25} src={dr} my="2em"></BackgroundImage>
          <Button3 to="/quiz/1">病久沒藥醫，速速檢測去</Button3>
          <Image mx="auto" mt="2em" w="6em" src={logo} />
        </Container>
      </Fullpage>
    );
  }
}
