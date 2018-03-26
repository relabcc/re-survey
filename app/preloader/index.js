import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackgroundImage from 'components/BackgroundImage';

import assets from './assets';

const Wrapper = styled.div`
  position: absolute;
  top: -9999px;
  left: -9999px;
  z-index: -999;
  width: 1px;
`;

class Preloader extends PureComponent {
  state = {}

  componentWillMount() {
    Promise.all(assets.map(this.loadAsset))
      .then(() => this.setState({ loaded: true }));
  }

  loadAsset = (src) => new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  })

  render() {
    const { loaded } = this.state;
    const loader = (
      <Wrapper>
        {assets && assets.map((src, index) => (
          <BackgroundImage
            key={`preload-${index}`}
            src={src}
          />
        ))}
      </Wrapper>
    );
    if (!loaded) {
      return (
        <div>
          Loading...
          {loader}
        </div>
      );
    }
    return (
      <div>
        {this.props.children}
        {loader}
      </div>
    );
  }
}

Preloader.propTypes = {
  children: PropTypes.node,
};

export default Preloader;
