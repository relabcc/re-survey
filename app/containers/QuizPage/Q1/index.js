import React, { PureComponent } from 'react';

import Box from 'components/Box';
import BackgroundImage from 'components/BackgroundImage';
import Absolute from 'components/Absolute';
import Text from 'components/Text';

import step from './step-1.svg';
import bubble from './bubble.svg';

const ratio = 77.61 / 388.25;
const bubbleRatio = 128.944 / 778.385;
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
class Q1 extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Box w={[1, null, null, 2 / 3]} mx="auto" my="5em">
          <BackgroundImage src={step} ratio={ratio} />
        </Box>
        <BackgroundImage src={bubble} ratio={bubbleRatio}>
          <Content>
            <Text>一天有24小時，你大概花幾小時「傳達」資訊？</Text>
            <Text>（演講簡報/企劃報告/社群溝通/產品說明/理念推廣/服務介紹/教材..）</Text>
          </Content>
        </BackgroundImage>
        <Box py="10em" w="1">
          clock
        </Box>
      </div>
    );
  }
}

// Q1.propTypes = {

// };

export default Q1;
