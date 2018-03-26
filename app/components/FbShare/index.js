import { fontSize } from 'styled-system';
import styled from 'styled-components';
import tag from 'clean-tag';

import blacklist from '../utils/blacklist';

import fbicon from './fbicon.svg';
import fbiconHover from './fbicon-hover.svg';

const FbShare = styled(tag)`
  padding: 0;
  ${fontSize}
  width: 2em;
  height: 2em;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  background-image: url(${fbicon});
  &:hover {
    background-image: url(${fbiconHover});
  }
`;

FbShare.defaultProps = {
  blacklist,
  is: 'button',
  f: '1em',
};

export default FbShare;
