import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isNil from 'lodash/isNil';

import Box from 'components/Box';
import Underline from 'components/Underline';
import Text from 'components/Text';
import CheckboxGroup from 'components/CheckboxGroup';
import { Button2 } from 'components/Buttons';
import TextInputwithLable from 'components/TextInputwithLable';

import questions from './questions';
import { setAnswer } from './reducer';
import isEmail from './isEmail';

class Survey extends PureComponent {
  state = {}

  getPerRow = (key) => {
    if (key === 'wantTo') return [1, null, 2];
    return 2;
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

  render() {
    const {
      syncAnswer,
      answers,
      skip,
      submitLabel,
      to,
      emailOnly,
      emailLabel,
      buttonEle: Button,
      onSubmit,
      emailRequired,
      ...props
    } = this.props;
    const { emailError, showError } = this.state;
    return (
      <Box {...props}>
        {!emailOnly && map(questions, ({ options, title, multiple }, key) => (
          <Box key={key} my="2.5em">
            <Underline my="1em" opacity={skip ? 0.3 : 1}>
              <Text fontWeight="bold">{title}</Text>
            </Underline>
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
        <TextInputwithLable
          onChange={this.handleEmailChange}
          onBlur={this.handleEmailBlur}
          error={showError && emailError}
          defaultValue={answers.get('email')}
          placeholder="XXX@xmail.com"
          disabled={skip}
          name="email"
        >
          {emailLabel}
        </TextInputwithLable>
        <Button
          mt="4em"
          to={to}
          onClick={onSubmit}
          disabled={!skip && (
              Boolean(emailError)
              || (!emailOnly && ['price', 'wantTo'].some((key) => isNil(answers.get(key))))
              || !answers.get('email').length
            )
          }
        >
          {submitLabel}
        </Button>
      </Box>
    );
  }
}

Survey.propTypes = {
  answers: PropTypes.shape(),
  syncAnswer: PropTypes.func,
  skip: PropTypes.bool,
  submitLabel: PropTypes.node,
  to: PropTypes.string,
  emailOnly: PropTypes.bool,
  buttonEle: PropTypes.func,
  emailLabel: PropTypes.node,
  onSubmit: PropTypes.func,
  emailRequired: PropTypes.bool,
};

Survey.defaultProps = {
  buttonEle: Button2,
  emailLabel: '想收到後續通知嗎？(留信箱)',
};

const mapStateToProps = (state) => ({
  answers: state.get('survey'),
});

const mapDispatchToProps = (dispatch) => ({
  syncAnswer: (...param) => dispatch(setAnswer(...param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
