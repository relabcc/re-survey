import React, { PureComponent } from 'react';

// import TextWithIcon from 'components/TextWithIcon';
import FixedLogo from 'components/FixedLogo';
import Container from 'components/Container';
import Bubble from 'components/Bubble';
import Toggle from 'components/Toggle';

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
          <Bubble>建議良方運算中...<br /><br />多項研究顯示透過視覺圖像幫助思考有助於資訊的吸收和傳遞，
          我們即將開設「資訊圖表的思考與設計」課程，
          現在填答三個問題就有機會成為「限量早鳥課程體驗嘉賓」！</Bubble>
          <Toggle mx="1em" my="2em" onChange={this.handleSkip} labelTrue="現在就填！" labelFalse="先看良方" />
          <Survey px="1em" skip={skip} submitLabel="看結果" to={`/result${skip ? '?skip' : ''}`} />
        </Container>
      </div>
    );
  }
}

export default SurveyPage;
