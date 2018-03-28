import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';
import ReactGA from 'react-ga';

import minBy from 'lodash/minBy';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Container from 'components/Container';
import Box from 'components/Box';
import Absolute from 'components/Absolute';
import Relative from 'components/Relative';
import Bubble from 'components/Bubble';
import BackgroundImage from 'components/BackgroundImage';
import ArrowDown from 'components/ArrowDown';
import Image from 'components/Image';
import Text from 'components/Text';
import Modal from 'components/Modal';
import { Button1 } from 'components/Buttons';

import HeaderTitle from './HeaderTitle';
import Prescription from './Prescription';
import Radar from '../QuizPage/InputModules/Radar/Radar';

import pyramid from './pyramid.svg';
import wantLesson from './i-want-lesson.svg';
import doubleLine from './double-line.svg';

import Survey from '../SurveyPage/Survey';
import isEmail from '../SurveyPage/isEmail';
import { setAnswer } from '../SurveyPage/reducer';

import {
  makeSelectSurveyEmail,
  makeSelectQuizScore,
  makeSelectSurveyTaken,
} from './selectors';

const names = {
  info: '資訊',
  story: '故事',
  design: '設計',
};

class ResultPage extends PureComponent {
  state = {
    openEnroll: false,
    taken: this.props.taken,
  }

  handleOpen = () => {
    this.setState({ openEnroll: true });
    ReactGA.event({
      category: 'Result',
      action: 'Want Lesson',
    });
  }

  handleClose = () => {
    this.setState({ openEnroll: false });
  }

  handleEmailChange = (email) => {
    const { syncAnswer } = this.props;
    const pass = email.length === 0 || isEmail(email);
    this.setState({
      email,
      emailError: pass ? null : 'E-mail格式不對喔',
    });
    syncAnswer('email', email);
  }

  handleEmailBlur = () => {
    const { emailError } = this.state;
    this.setState({
      showError: Boolean(emailError),
    });
  }

  scrollToPrescription = () => {
    document.getElementById('prescription').scrollIntoView({ behavior: 'smooth' });
  }

  handleSubmit = () => {
    this.setState({
      openEnroll: false,
      enrolled: true,
    });
  }

  render() {
    const { scores } = this.props;
    const { openEnroll, enrolled, taken } = this.state;
    const scoresArray = Object.entries(scores);

    return (
      <Container py="2em">
        <HeaderTitle />
        <Box>
          <Bubble>
            傳說中，只要跟資訊圖表三兄弟愈熟，離「資訊肥胖症」愈遠！<br />看看你跟「資訊圖表三兄弟」有多熟！
          </Bubble>
        </Box>
        <Box px={[0, 0, '10%']} mt="4em">
          <Relative>
            <Box px="2%">
              <ContainerDimensions>
                {({ width }) => (
                  <Radar
                    position="relative"
                    width={width}
                    data={scoresArray.map(([key, value]) => ({
                      axis: names[key],
                      group: 'a',
                      value,
                    }))}
                    onChange={this.handleOnChange}
                    levels={4}
                    maxValue={20}
                    strokeWidthRatio={75}
                  />
                )}
              </ContainerDimensions>
            </Box>
            <Absolute top="-3%" left="0" width={1}>
              <BackgroundImage src={pyramid} ratio={675.51 / 900} />
            </Absolute>
          </Relative>
        </Box>
        <ArrowDown mt={['-6em', null, '-8em']} onClick={this.scrollToPrescription} />
        <Prescription
          mt="3em"
          type={minBy(scoresArray, ([, value]) => value)[0]}
          onWantClick={this.handleOpen}
          enrolled={enrolled}
        />
        <Modal
          isOpen={openEnroll}
          onRequestClose={this.handleClose}
        >
          <Box mx="auto" w={['14em', null, '20em']}>
            <Image src={wantLesson} />
          </Box>
          <Box mt="1em" px="2em" f="0.9em">
            <Image src={doubleLine} />
          </Box>
          <Box px={[0, 0, '1em']}>
            <Text align="center" fontWeight="bold" mt="2em">
              {taken
                ? '請確認一下E-mail地址，有任何最新消息我們會立刻通知你！'
                : '如果你有想上課的意願，底下的問題能幫助我們更了解你對課堂上的需求喔！'}
            </Text>
            <Survey
              buttonEle={Button1}
              emailOnly={taken}
              emailRequired
              emailLabel="你的E-mail地址"
              submitLabel="送出"
              onSubmit={this.handleSubmit}
            />
          </Box>
        </Modal>
      </Container>
    );
  }
}

ResultPage.propTypes = {
  scores: PropTypes.shape({
    story: PropTypes.number,
    info: PropTypes.number,
    design: PropTypes.number,
  }),
  taken: PropTypes.bool,
  email: PropTypes.string,
  syncAnswer: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  scores: makeSelectQuizScore(),
  email: makeSelectSurveyEmail(),
  taken: makeSelectSurveyTaken(),
});

const mapDispatchToProps = (dispatch) => ({
  syncAnswer: (...param) => dispatch(setAnswer(...param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
