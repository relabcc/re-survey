import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button2 } from 'components/Buttons';
import Box from 'components/Box';
import Text from 'components/Text';
import Bubble from 'components/Bubble';

import { setAnswer } from './reducer';

import InputModules from './InputModules';
import questions from './questions';

const questionLength = questions.length;

class Quiz extends PureComponent {
  constructor(props) {
    super(props);
    const answers = props.answers.get(props.index);
    this.state = {
      touched: answers && answers.some(Boolean),
    };
  }

  handleChange = (path) => (value) => {
    this.setState({ touched: true });
    this.props.syncAnser(path, value);
  }

  render() {
    const { index, answers } = this.props;
    const { touched } = this.state;
    const questionData = questions[index];
    const isLast = index === questionLength - 1;
    return (
      <Box align="center">
        {questionData.map((question, i) => {
          const InputModule = InputModules[question.type];
          return (
            <div key={i}>
              <Box px={['1em', null, '4em']}>
                <Bubble>
                  <Text>{question.title}</Text>
                  {question.description && <Text mt="0.5em" f="0.8em">({question.description})</Text>}
                </Bubble>
              </Box>
              <InputModule
                w={1}
                {...question}
                onChange={this.handleChange([index, i])}
                defaultValue={answers.getIn([index, i])}
              />
            </div>
          );
        })}
        <Button2 disabled={!touched} my="2em" to={isLast ? '/final' : `/quiz/${+index + 2}`}>
          {isLast ? '看結果' : '下一題'}
        </Button2>
      </Box>
    );
  }
}

Quiz.propTypes = {
  index: PropTypes.number,
  syncAnser: PropTypes.func,
  answers: PropTypes.shape(),
};

const mapStateToProps = (state) => ({
  answers: state.get('quiz'),
});

const mapDispatchToProps = (dispatch) => ({
  syncAnser: (...param) => dispatch(setAnswer(...param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
