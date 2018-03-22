import React from 'react';
import PropTypes from 'prop-types';

import { Button2 } from 'components/Buttons';
import Text from 'components/Text';
import Bubble1 from 'components/Bubbles/Bubble1';

import InputModules from './InputModules';
import questions from './questions';

const questionLength = questions.length;

const Quiz = ({ index }) => {
  const questionData = questions[index];
  return (
    <div>
      {questionData.map((question, i) => {
        const InputModule = InputModules[question.type];
        return (
          <div key={i}>
            <Bubble1>
              <Text>{question.title}</Text>
              {question.description && <Text f="0.8em">{question.description}</Text>}
            </Bubble1>
            <InputModule py="2em" {...question} w={1} />
          </div>
        );
      })}
      <Button2
        position="absolute"
        bottom="2em"
        right="2em"
        to={index === questionLength - 1 ? '/result' : `/quiz/${+index + 2}`}
      >
        下一題
      </Button2>
    </div>
  );
};

Quiz.propTypes = {
  index: PropTypes.number,
};

export default Quiz;
