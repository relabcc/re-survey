import React from 'react';
import PropTypes from 'prop-types';

import Relative from 'components/Relative';
import Absolute from 'components/Absolute';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Paper from 'components/Paper';
import BackgroundImage from 'components/BackgroundImage';
import Image from 'components/Image';
import MdLink from 'components/MdLink';
import Link from 'components/Link';
import Underline from 'components/Underline';
import { Button1 } from 'components/Buttons';

import title from './title.svg';
import others from './others.svg';
import three from './three-head.svg';
import hand from './hand-overlay.svg';
import logo from './black-logo.svg';

import suggestions from './suggestions';

const Prescription = ({ type, enrolled, onWantClick, ...props }) => (
  <Box {...props}>
    <Relative>
      <Box px={[0, 0, '13.4%']}>
        <Paper id="prescription">
          <Image src={title} />
          <MdLink py="2em" mx="1em" lineHeight="2">{suggestions[type].suggestion}</MdLink>
          <Box px="1em">
            <Underline.black />
            <Box my="2em">
              <Image w="6em" src={others} />
            </Box>
            <Relative>
              <Paper>
                {suggestions[type].extension.map(({ name, url }, index) => (
                  <li key={index}>
                    <Link href={url} target="_blank">{name}</Link>
                  </li>
                ))}
              </Paper>
              <Absolute w="35%" right="2%" top="0">
                <BackgroundImage transform="translateY(-88%)" src={three} ratio={54.1 / 183.36} />
              </Absolute>
            </Relative>
          </Box>
          <Flex justify="center" my="2em">
            <Button1 mx="1em">分享</Button1>
            <Button1 mx="1em" disabled={enrolled} onClick={onWantClick}>我想上課</Button1>
          </Flex>
          <Box mx="auto" w="8em">
            <Image src={logo} />
          </Box>
        </Paper>
      </Box>
      <Absolute display={['none', null, 'block']} w={1} top="10%" pointerEvents="none">
        <BackgroundImage src={hand} ratio={416 / 810.55} />
      </Absolute>
    </Relative>
  </Box>
);

Prescription.propTypes = {
  type: PropTypes.string,
  enrolled: PropTypes.bool,
  onWantClick: PropTypes.func,
};

export default Prescription;
