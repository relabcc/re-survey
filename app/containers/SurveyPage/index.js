import React, { PureComponent } from 'react';

// import TextWithIcon from 'components/TextWithIcon';
import FixedLogo from 'components/FixedLogo';
import Container from 'components/Container';
import Bubble from 'components/Bubble';
import Toggle from 'components/Toggle';
import Text from 'components/Text';

import Survey from './Survey';

class SurveyPage extends PureComponent {
  state = {
    skip: false,
  }

  handleSkip = (value) => {
    const skip = !value;
    this.setState({ skip });
    if (skip) window.scroll({ top: window.innerHeight + 100, left: 0, behavior: 'smooth' });
  }

  render() {
    const { skip } = this.state;
    return (
      <div>
        <FixedLogo />
        <Container pt="7em" pb="4em" px={['1em', null, '4em']}>
          <Bubble>
            <Text fontWeight={900} mb="1.5em">
              建議良方運算中...
            </Text>
            <Text>
              多項研究顯示透過<Text.bold>視覺圖像</Text.bold>幫助思考有助於資訊的吸收和傳遞，
              我們即將開設<Text.bold>「資訊圖表的思考與設計」</Text.bold>課程，
              現在填答三個問題就有機會成為<Text.bold>「限量早鳥課程體驗嘉賓」！</Text.bold>
            </Text>
          </Bubble>
          <Toggle mx="1em" my="2em" onChange={this.handleSkip} labelTrue="現在就填！" labelFalse="先看良方" />
          <Survey px="1em" skip={skip} submitLabel="看結果" to={`/result${skip ? '?skip' : ''}`} />
        </Container>
      </div>
    );
  }
}

export default SurveyPage;
