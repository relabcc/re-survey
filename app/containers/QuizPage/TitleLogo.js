import React from 'react';

import BackgroundImage from 'components/BackgroundImage';

import logo from './title-icon.svg';

const TitleLogo = (props) => (
  <BackgroundImage {...props} ratio={77.75 / 270.72} src={logo} />
);

export default TitleLogo;
