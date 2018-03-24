import React from 'react';
import PropTypes from 'prop-types';

import { Button2 } from 'components/Buttons';
import Box from 'components/Box';
import Text from 'components/Text';
import Bubble from 'components/Bubble';

import InputModules from './InputModules';
import questions from './questions';

const questionLength = questions.length;

const Quiz = ({ index }) => {
  const questionData = questions[index];
  const isLast = index === questionLength - 1;
  return (
    <Box align="center">
      {questionData.map((question, i) => {
        const InputModule = InputModules[question.type];
        return (
          <div key={i}>
            <Box px={['2em', null, '4em']}>
              <Bubble>
                <Text>{question.title}</Text>
                {question.description && <Text f="0.8em">({question.description})</Text>}
              </Bubble>
            </Box>
            <InputModule py="2em" {...question} w={1} />
          </div>
        );
      })}
      <Button2 my="2em" to={isLast ? '/result' : `/quiz/${+index + 2}`}>
        {isLast ? '看結果' : '下一題'}
      </Button2>
    </Box>
  );
};

Quiz.propTypes = {
  index: PropTypes.number,
};

export default Quiz;
