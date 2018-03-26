import React, { PureComponent } from 'react';

import TextWithIcon from 'components/TextWithIcon';
import FixedLogo from 'components/FixedLogo';
import Container from 'components/Container';
import Bubble from 'components/Bubble';
import Toggle from 'components/Toggle';

import Survey from './Survey';

class SurveyPage extends PureComponent {
  state = {
    skip: false,
  }

  handleToggle = (value) => {
    this.setState({ skip: !value });
    if (!value) window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  }

  render() {
    const { skip } = this.state;
    return (
      <div>
        <FixedLogo />
        <Container pt="7em" pb="4em" px={['1.5em', null, '4em']}>
          <TextWithIcon>「資訊肥胖症」檢測成果運算中...</TextWithIcon>
          <Bubble>我們即將開設一門資訊視覺溝通思考課程，等待的時候可以幫我們填答三個小問題嗎？我們將抽出「人人都能上手的設計術」一書送出！</Bubble>
          <Toggle my="2em" onChange={this.handleToggle} labelTrue="當然好，我立馬填！" labelFalse="完全沒興趣" />
          <Survey skip={skip} submitLabel="看結果" to="/result" />
        </Container>
      </div>
    );
  }
}

export default SurveyPage;
