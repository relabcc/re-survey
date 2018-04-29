import React from 'react';
import { Button3 } from 'components/Buttons';
import Container from 'components/Container';
import Fullpage from 'components/Fullpage';
import Image from 'components/Image';
import BackgroundImage from 'components/BackgroundImage';
import Box from 'components/Box';
import Relative from 'components/Relative';
import Absolute from 'components/Absolute';
import Link from 'components/Link';
import FbShare from 'components/FbShare';
import Text from 'components/Text';
import Dialog from 'components/Bubble/Dialog';

import basename from 'basename';

import dr from './dr.svg';
import logo from './relab-logo.svg';

export default class HomePage extends React.PureComponent {
  state = {
    how: false,
  }

  setHow = () => {
    this.setState({ how: true });
    window.scrollTo(0, 0);
  }

  render() {
    const { how } = this.state;
    const dialogContent = (
      <Box align="left" mx="1em" mb="1em" f="0.8em">
        <Text f="1.25em" mt="-0.5em" mb="0.5em" fontWeight={900}>
          {how ? '別急，先做個檢測！' : <span>有一種胖，<br />叫做「資訊代謝不良的胖」</span>}
        </Text>
        <Text>
          {how
            ? <span>看看有什麼良方能讓資訊的吸收和傳達更有效率，<Text.bold>提升工作和學習品質！</Text.bold></span>
            : (
              <span>現代人每天接收的資訊量已遠超過能吸收的範圍，根據
                <Link href="https://www.google.com/search?q=%E8%AA%8D%E7%9F%A5%E8%B2%A0%E8%8D%B7%E7%90%86%E8%AB%96" target="_blank">認知負荷理論</Link>
                ，這不只會造成心理壓力，也將嚴重<Text.bold>影響工作和學習表現！</Text.bold>
              </span>)
          }
        </Text>
      </Box>
    );
    return (
      <Fullpage>
        <Container px={['1em', null, '4em']} align="center" mt={['2em', null, null, '6em']}>
          <Box px={[0, 0, '10%', '20%', '21%', '5%']}>
            <Relative>
              <Box
                display={['block', null, null, 'none']}
                mb="-10%"
                pr={[null, null, '33%', '3em']}
              >
                <Dialog.flipped>
                  {dialogContent}
                </Dialog.flipped>
              </Box>
              <Absolute
                display={['none', null, null, 'block']}
                z={1}
                left="0"
                w="70%"
                transform="translate(-50%, -35%)"
              >
                <Dialog>
                  {dialogContent}
                </Dialog>
              </Absolute>
            </Relative>
            <Box px="15%" my="2em">
              <BackgroundImage ratio={651.54 / 699.93} src={dr} />
            </Box>
          </Box>
          {how ? <Button3 to="/quiz/1">病久沒藥醫，速速檢測去</Button3> : <Button3 onClick={this.setHow}>那怎麼辦</Button3>}
          <Link noBorder href="https://www.facebook.com/ReLAB.cc/" target="_blank" title="Re-lab 粉絲頁">
            <Image mx="auto" my="1.5em" w="6em" src={logo} />
          </Link>
        </Container>
        <Box position="fixed" top="1em" right="1em">
          <FbShare link={basename} />
        </Box>
      </Fullpage>
    );
  }
}
