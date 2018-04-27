import React from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

import Relative from 'components/Relative';
import Absolute from 'components/Absolute';
import Box from 'components/Box';
import Flex from 'components/Flex';
import Paper from 'components/Paper';
import Text from 'components/Text';
import BackgroundImage from 'components/BackgroundImage';
import Image from 'components/Image';
import MdLink from 'components/MdLink';
import Link from 'components/Link';
import Speech from 'components/Bubble/Speech';
import { Button1 } from 'components/Buttons';
import fbShareLink from 'utils/fbShareLink';
import basename from 'basename';

import title from './title.svg';
import others from './others.svg';
import three from './three-head.svg';
import hand from './hand-overlay.svg';
import logo from './black-logo.svg';

import suggestions, { categories } from './suggestions';

const Prescription = ({ type, enrolled, onWantClick, ...props }) => (
  <Box {...props}>
    <Relative>
      <Box px={[0, 0, '13.4%']}>
        <Paper id="prescription">
          <Image mt="2em" mb="0.5em" src={title} />
          <Speech align="left">
            <MdLink py="2em" mx="1em" lineHeight="2">{suggestions[type].suggestion}</MdLink>
          </Speech>
          <Box px="1em">
            <Box my="2em">
              <Image w="9em" src={others} />
            </Box>
            <Relative>
              <Paper borderColor="gray">
                {map(groupBy(suggestions[type].extension, 'category'), (list, key) => (
                  <Box key={key} my="1em">
                    <Text my="0.5em" f="1em" fontWeight={900}>{categories[key]}</Text>
                    {list.map(({ name, url }, index) => (
                      <li key={index}>
                        <Link lineHeight={2} href={url} target="_blank">{name}</Link>
                      </li>
                    ))}
                  </Box>
                ))}
              </Paper>
            </Relative>
          </Box>
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

Prescription.propTypes = {
  type: PropTypes.string,
  enrolled: PropTypes.bool,
  onWantClick: PropTypes.func,
};

export default Prescription;
