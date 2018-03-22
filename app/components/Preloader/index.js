import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImage from '../BackgroundImage';

const Wrapper = styled.div`
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -999;
  width: 1px;
`;

function Preloader({ images }) {
  return (
    <Wrapper>
      {images && images.map((src, index) => (
        <BackgroundImage
          key={`preload-${index}`}
          src={src}
        />
      ))}
    </Wrapper>
  );
}

Preloader.propTypes = {
  images: PropTypes.array,
};

export default Preloader;
