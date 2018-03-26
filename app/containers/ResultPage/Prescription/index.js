import React from 'react';
import PropTypes from 'prop-types';

import Relative from 'components/Relative';
import Absolute from 'components/Absolute';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Paper from 'components/Paper';
import BackgroundImage from 'components/BackgroundImage';
import Image from 'components/Image';
import Text from 'components/Text';
import Link from 'components/Link';
import { Button3 } from 'components/Buttons';

import title from './title.svg';
import others from './others.svg';
import three from './three-head.svg';
import hand from './hand-overlay.svg';
import logo from './black-logo.svg';

import suggestions from './suggestions';

const Prescription = ({ type, ...props }) => (
  <Box {...props}>
    <Relative>
      <Box px={[0, 0, '13.4%']}>
        <Paper>
          <Image src={title} />
          <Text>{suggestions[type].suggestion}</Text>
          <Box my="2em">
            <Image w="6em" src={others} />
          </Box>
          <Relative>
            <Paper>
              {suggestions[type].extension.map(({ name, link }, index) => (
                <li key={index}>
                  <Link href={link} _target="blank">{name}</Link>
                </li>
              ))}
            </Paper>
            <Absolute w="35%" right="2%" top="0">
              <BackgroundImage transform="translateY(-93%)" src={three} ratio={54.1 / 183.36} />
            </Absolute>
          </Relative>
          <Flex my="2em">
            <Button3 mx="1em">分享</Button3>
            <Button3 mx="1em">我想上課</Button3>
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
};

export default Prescription;
