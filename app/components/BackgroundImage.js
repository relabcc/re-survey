import PropTypes from 'prop-types';
import { ratio } from 'styled-system';
import styled from 'styled-components';

import Box from './Box';

const BackgroundImage = styled(Box)`
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: ${({ size }) => size};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: no-repeat;
  ${ratio}
`;

BackgroundImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
};

BackgroundImage.defaultProps = {
  ratio: 9 / 16,
  size: 'cover',
  backgroundPosition: '50% 50%',
};

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
