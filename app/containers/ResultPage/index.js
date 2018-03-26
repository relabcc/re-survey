import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';

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

import HeaderTitle from './HeaderTitle';
import Prescription from './Prescription';
import Radar from '../QuizPage/InputModules/Radar/Radar';

import pyramid from './pyramid.svg';

import {
  makeSelectSurveyEmail,
  makeSelectQuizScore,
} from './selectors';

const names = {
  info: '資訊',
  story: '故事',
  design: '設計',
};

class ResultPage extends PureComponent {
  state = {
    openEnroll: false,
  }

  handleOpen = () => {
    this.setState({ openEnroll: true });
  }

  scrollToPrescription = () => {
    document.getElementById('prescription').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { scores } = this.props;
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
        />
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
};

const mapStateToProps = createStructuredSelector({
  scores: makeSelectQuizScore(),
  email: makeSelectSurveyEmail(),
});

export default connect(mapStateToProps)(ResultPage);
