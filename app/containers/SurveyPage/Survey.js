import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import map from 'lodash/map';

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

class Survey extends PureComponent {
  state = {}

  getPerRow = (key) => {
    if (key === 'price') return 2;
    if (key === 'wantTo') return [1, null, 2];
    return 2;
  }

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
    const { syncAnswer, answers, disabled, submitLabel, ...props } = this.props;
    const { emailError, showError } = this.state;
    return (
      <Box {...props}>
        {map(questions, ({ options, title, multiple }, key) => (
          <Box key={key} my="1em">
            <Underline.inline my="1em" opacity={disabled ? 0.3 : 1}>
              <Text>{title}</Text>
            </Underline.inline>
            <CheckboxGroup
              disabled={disabled}
              onChange={(value) => syncAnswer(key, value)}
              options={options}
              defaultValue={answers.get(key)}
              multiple={multiple}
              perRow={this.getPerRow(key)}
              noUnderline
            />
          </Box>
        ))}
        <Flex my="2em" flexWrap="wrap">
          <Box w={[1, null, 1 / 2]} pr={[0, 0, '1em']} my="0.5em" opacity={disabled ? 0.3 : 1}>
            <Underline>想收到後續通知嗎？(留信箱)</Underline>
          </Box>
          <Box w={[1, null, 1 / 2]} pl={[0, 0, '1em']} my="0.5em">
            <TextInput
              onChange={this.handleEmailChange}
              onBlur={this.handleEmailBlur}
              error={showError && emailError}
              defaultValue={answers.get('email')}
              disabled={disabled}
            />
          </Box>
        </Flex>
        <Button2
          mt="4em"
          disabled={!disabled && (emailError || ['price', 'wantTo', 'email'].some((key) => !answers.get(key)))}
        >
          {submitLabel}
        </Button2>
      </Box>
    );
  }
}

Survey.propTypes = {
  answers: PropTypes.shape(),
  syncAnswer: PropTypes.func,
  disabled: PropTypes.bool,
  submitLabel: PropTypes.node,
};

const mapStateToProps = (state) => ({
  answers: state.get('survey'),
});

const mapDispatchToProps = (dispatch) => ({
  syncAnswer: (...param) => dispatch(setAnswer(...param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
