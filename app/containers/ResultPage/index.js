import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import minBy from 'lodash/minBy';
import sumBy from 'lodash/sumBy';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Container from 'components/Container';
import Box from 'components/Box';

import Image from 'components/Image';
import Text from 'components/Text';
import Modal from 'components/Modal';
import { Button1 } from 'components/Buttons';

import Prescription from './Prescription';

import wantLesson from './i-want-lesson.svg';
import doubleLine from './double-line.svg';

import Survey from '../SurveyPage/Survey';
import isEmail from '../SurveyPage/isEmail';
import { setScore } from '../QuizPage/reducer';
import { setAnswer } from '../SurveyPage/reducer';

import {
  makeSelectSurveyEmail,
  makeSelectQuizScore,
  makeSelectSurveyTaken,
} from './selectors';

class ResultPage extends PureComponent {
  state = {
    openEnroll: false,
    taken: this.props.taken,
  }

  componentDidMount() {
    const { syncScore, scores } = this.props;
    syncScore(scores);
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
        <Prescription
          type={minBy(scoresArray, ([, value]) => value)[0]}
          scoreSum={sumBy(scoresArray, ([, value]) => value)}
          onWantClick={this.handleOpen}
          enrolled={enrolled}
        />
        <Modal
          isOpen={openEnroll}
          onRequestClose={this.handleClose}
        >
          <Box py={['1em', null, '2em']}>
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
  syncScore: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  scores: makeSelectQuizScore(),
  email: makeSelectSurveyEmail(),
  taken: makeSelectSurveyTaken(),
});

const mapDispatchToProps = (dispatch) => ({
  syncAnswer: (...param) => dispatch(setAnswer(...param)),
  syncScore: (score) => dispatch(setScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
