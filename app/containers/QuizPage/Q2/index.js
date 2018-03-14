import React, { PureComponent } from 'react';

import Box from 'components/Box';
import BackgroundImage from 'components/BackgroundImage';
import Absolute from 'components/Absolute';
import Text from 'components/Text';
import Checkbox from 'components/Checkbox';
import Flex from 'components/Flex';

import step from './step-2.svg';
import bubble from './bubble.svg';
import confidence from './confidence.svg';
import nervous from './nervous.svg';

const ratio = 77.61 / 388.25;
const bubbleRatio = 128.944 / 778.385;
const ratioFace = 173.57 / 173.03;


const Content = Absolute.extend`
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  height: 100%
`;

class Q2 extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Box w={[1, null, null, 2 / 3]} mx="auto" my="5em">
          <BackgroundImage src={step} ratio={ratio} />
        </Box>
        <BackgroundImage src={bubble} ratio={bubbleRatio}>
          <Content>
            <Text>你最有自信的溝通情境</Text>
          </Content>
        </BackgroundImage>
        <Box py="1em" w="1">
          <Flex flexWrap="wrap">
            <Box w={[1, 1, null, 1 / 3]} px="3em">
              <BackgroundImage src={confidence} ratio={ratioFace} />
            </Box>
            <Box w={[1, 1 / 2, null, 1 / 3]}>
              <Checkbox>多人會議討論</Checkbox>
              <Checkbox>多人會議討論</Checkbox>
              <Checkbox>多人會議討論</Checkbox>
            </Box>
            <Box w={[1, 1 / 2, null, 1 / 3]}>
              <Checkbox>一對一講解</Checkbox>
              <Checkbox>一對一講解</Checkbox>
              <Checkbox>一對一講解</Checkbox>
            </Box>
          </Flex>
        </Box>
        <BackgroundImage src={bubble} ratio={bubbleRatio}>
          <Content>
            <Text>你最感焦慮的溝通情境</Text>
          </Content>
        </BackgroundImage>
        <Box py="1em" w="1">
          <Flex flexWrap="wrap">
            <Box w={[1, 1, null, 1 / 3]} px="3em">
              <BackgroundImage src={nervous} ratio={ratioFace} />
            </Box>
            <Box w={[1, 1 / 2, null, 1 / 3]}>
              <Checkbox>多人會議討論</Checkbox>
              <Checkbox>多人會議討論</Checkbox>
              <Checkbox>多人會議討論</Checkbox>
            </Box>
            <Box w={[1, 1 / 2, null, 1 / 3]}>
              <Checkbox>一對一講解</Checkbox>
              <Checkbox>一對一講解</Checkbox>
              <Checkbox>一對一講解</Checkbox>
            </Box>
          </Flex>
        </Box>
      </div>
    );
  }
}

// Q1.propTypes = {

// };

export default Q2;
