import React from 'react';
import PropTypes from 'prop-types';

import Relative from 'components/Relative';
import Absolute from 'components/Absolute';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Paper from 'components/Paper';
import Text from 'components/Text';
import BackgroundImage from 'components/BackgroundImage';
import Image from 'components/Image';
// import MdLink from 'components/MdLink';
import Link from 'components/Link';
import ResultFatty from 'components/ResultFatty';
import Speech from 'components/Bubble/Speech';
import Res from 'components/Bubble/Res';
import { Button1 } from 'components/Buttons';
import fbShareLink from 'utils/fbShareLink';
import basename from 'basename';

import titleImg from './title.svg';
// import others from './others.svg';
import three from './three-head.svg';
import hand from './hand-overlay.svg';
import logo from './black-logo.svg';
import HeaderTitle from '../HeaderTitle';

import suggestions from './suggestions';
import diagnose from './diagnose';

const getDiagnose = (score) => {
  if (score > 4) return 2;
  if (score > 2) return 1;
  return 0;
};

const Prescription = ({ type, enrolled, onWantClick, scoreSum, ...props }) => {
  const diaIndex = getDiagnose(scoreSum);
  const dia = diagnose[diaIndex];
  return (
    <Box {...props}>
      <Relative>
        <Box px={[0, 0, '13.4%']}>
          <Paper id="prescription">
            <HeaderTitle my="2em" />
            <Box px="5%" my="2em">
              <ResultFatty mb="2em" w={1} active={diaIndex} />
              <Res>
                <Text fontWeight="bold">{dia.title}</Text>
              </Res>
            </Box>
            <Image mt="2em" mb="0.5em" src={titleImg} />
            <Speech align="left">
              <Text mt="1.5em" fontWeight="bold">{dia.suggestion}</Text>
              <Box f="0.8em" pl="1.5rem" my="2em">
                {suggestions[type].map(({ name, title, url }, index) => (
                  <Box mb="1.5em" key={index}>
                    <Text>{title}</Text>
                    <ul>
                      <li>
                        <Link lineHeight={2} href={url} target="_blank">{name}</Link>
                      </li>
                    </ul>
                  </Box>
                ))}
              </Box>
            </Speech>
            <Flex justify="center" my="2em">
              <Button1 mx="1em" eventLabel="FB Share Result" href={fbShareLink(`${basename}share`)}>分享</Button1>
              <Button1 mx="1em" disabled={enrolled} onClick={onWantClick}>我想上課</Button1>
            </Flex>
            <Box mx="33%" my="2em">
              <BackgroundImage src={three} ratio={54.1 / 183.36} />
            </Box>
            <Box mx="auto" w="8em" my="2em">
              <Link noBorder href="https://www.facebook.com/ReLAB.cc/" target="_blank" title="Re-lab 粉絲頁">
                <Image src={logo} />
              </Link>
            </Box>
          </Paper>
        </Box>
        <Absolute display={['none', null, 'block']} w={1} top="10%" pointerEvents="none">
          <BackgroundImage src={hand} ratio={416 / 810.55} />
        </Absolute>
      </Relative>
    </Box>
  );
};

Prescription.propTypes = {
  type: PropTypes.string,
  enrolled: PropTypes.bool,
  onWantClick: PropTypes.func,
  scoreSum: PropTypes.number,
};

export default Prescription;
