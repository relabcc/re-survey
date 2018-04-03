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
          <TextWithIcon mb="-1em">檢測成果運算中...</TextWithIcon>
          <Bubble>我們即將開設「資訊視覺化設計思考思考」課程，幫忙填答三個問題將有機或抽中「人人都能上手的設計術」一書和線上課程早鳥體驗！</Bubble>
          <Toggle mx="1em" my="2em" onChange={this.handleSkip} labelTrue="現在就填！" labelFalse="直接看結果" />
          <Survey px="1em" skip={skip} submitLabel="看結果" to={`/result${skip ? '?skip' : ''}`} />
        </Container>
      </div>
    );
  }
}

export default SurveyPage;
