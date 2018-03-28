import React from 'react';
import { Button3 } from 'components/Buttons';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import Image from 'components/Image';
import BackgroundImage from 'components/BackgroundImage';
import Box from 'components/Box';
import FbShare from 'components/FbShare';

import basename from 'basename';

import dr from './dr.svg';
import logo from './relab-logo.svg';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fullpage>
        <Container px={['1em', null, '4em']} align="center">
          <Box px={[0, 0, '10%', '16%', '10%']}>
            <BackgroundImage ratio={653.13 / 740.25} src={dr} my="2em"></BackgroundImage>
          </Box>
          <Button3 to="/quiz/1">病久沒藥醫，速速檢測去</Button3>
          <Image mx="auto" mt="1.5em" w="6em" src={logo} />
        </Container>
        <Box position="fixed" top="1em" right="1em">
          <FbShare link={basename} />
        </Box>
      </Fullpage>
    );
  }
}
