import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import TextWithIcon from 'components/TextWithIcon';
import FixedLogo from 'components/FixedLogo';
import Container from 'components/Container';
import Bubble from 'components/Bubble';
import Toggle from 'components/Toggle';
import Box from 'components/Box';
import Underline from 'components/Underline';
import Flex from 'components/Flex';
import Text from 'components/Text';
import TextInput from 'components/TextInput';
import CheckboxGroup from 'components/CheckboxGroup';
import { Button2 } from 'components/Buttons';

import questions from './questions';
import { setAnswer } from './reducer';
import isEmail from './isEmail';

class SurveyPage extends PureComponent {
  state = {
    skip: false,
  }

  getPerRow = (key) => {
    if (key === 'price') return 2;
    if (key === 'wantTo') return [1, null, 2];
    return 2;
  }

  handleToggle = (value) => this.setState({ skip: !value })

  handleEmailChange = (email) => {
    const { syncAnswer } = this.props;
    const error = isEmail(email);
    this.setState({
      email,
      emailError: error ? null : 'E-mail格式不對喔',
    });
    syncAnswer('email', email);
  }

  handleEmailBlur = () => {
    const { emailError } = this.state;
    this.setState({
      showError: Boolean(emailError),
    });
  }

  render() {
    const { syncAnswer, answers } = this.props;
    const { skip, emailError, showError } = this.state;
    return (
      <div>
        <FixedLogo />
        <Container pt="6em" pb="4em" px={['1.5em', null, '4em']}>
          <TextWithIcon>「資訊肥胖症」檢測成果運算中...</TextWithIcon>
          <Bubble>我們即將開設一門資訊視覺溝通思考課程，等待的時候可以幫我們填答三個小問題嗎？我們將抽出「人人都能上手的設計術」一書送出！</Bubble>
          <Toggle my="2em" onChange={this.handleToggle} labelTrue="當然好，我立馬填！" labelFalse="完全沒興趣" />
          <Box>
            {map(questions, ({ options, title, multiple }, key) => (
              <Box key={key} my="1em">
                <Underline.inline my="1em" opacity={skip ? 0.3 : 1}>
                  <Text>{title}</Text>
                </Underline.inline>
                <CheckboxGroup
                  disabled={skip}
                  onChange={(value) => syncAnswer(key, value)}
                  options={options}
                  defaultValue={answers.get(key)}
                  multiple={multiple}
                  perRow={this.getPerRow(key)}
                  noUnderline
                />
              </Box>
            ))}
          </Box>
          <Flex my="2em">
            <Box w={1 / 2} mr="1em" opacity={skip ? 0.3 : 1}>
              <Underline>想收到後續通知嗎？(留信箱)</Underline>
            </Box>
            <Box w={1 / 2} ml="1em">
              <TextInput
                onChange={this.handleEmailChange}
                onBlur={this.handleEmailBlur}
                error={showError && emailError}
                defaultValue={answers.get('email')}
                disabled={skip}
              />
            </Box>
          </Flex>
          <Button2
            mt="4em"
            disabled={!skip && (emailError || ['price', 'wantTo', 'email'].some((key) => !answers.get(key)))}
          >
            看結果
          </Button2>
        </Container>
      </div>
    );
  }
}

SurveyPage.propTypes = {
  answers: PropTypes.shape(),
  syncAnswer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  answers: state.get('survey'),
});

const mapDispatchToProps = (dispatch) => ({
  syncAnswer: (...param) => dispatch(setAnswer(...param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);
