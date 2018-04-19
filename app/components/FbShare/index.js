import React from 'react';
import { fontSize, themeGet } from 'styled-system';
import styled from 'styled-components';
import Tag from 'clean-tag';
import ReactGA from 'react-ga';

import blacklist from '../utils/blacklist';
import fbShareLink from '../../utils/fbShareLink';

import fbicon from './fbicon.svg';
import fbiconHover from './fbicon-hover.svg';

const FbShare = styled(({ link, ...props }) => <Tag to={fbShareLink(link)} eventLabel="FB Share" {...props} />)`
  display: block;
  padding: 0;
  ${fontSize}
  width: 2em;
  height: 2em;
  background-color: ${themeGet('colors.bg')};
  border: 1px solid ${themeGet('colors.black')};
  border-radius: 50%;
  background-size: cover;
  background-image: url(${fbicon});
  &:hover {
    background-image: url(${fbiconHover});
  }
`;

FbShare.defaultProps = {
  blacklist,
  is: ReactGA.OutboundLink,
  f: '1em',
  target: '_blank',
  title: '分享出去',
};

export default FbShare;
