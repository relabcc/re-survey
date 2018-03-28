import React from 'react';
import { fontSize } from 'styled-system';
import styled from 'styled-components';
import Tag from 'clean-tag';
import ReactGA from 'react-ga';

import fbShareLink from 'utils/fbShareLink';
import blacklist from '../utils/blacklist';

import fbicon from './fbicon.svg';
import fbiconHover from './fbicon-hover.svg';

const FbShare = styled(({ link, ...props }) => <Tag to={fbShareLink(link)} eventLabel="FB Share" {...props} />)`
  display: block;
  padding: 0;
  ${fontSize}
  width: 2em;
  height: 2em;
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
};

export default FbShare;
