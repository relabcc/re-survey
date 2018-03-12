import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { injectGlobal } from 'styled-components';
import 'sanitize.css/sanitize.css';

import Box from '../app/components/Box';
import ThemeProvider from '../app/components/ThemeProvider';
import theme from '../app/components/ThemeProvider/theme';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    background: ${theme.colors.background};
    font-family: ${theme.font};
  }
`;

addDecorator((story) => (
  <ThemeProvider>
    <Box p="1em">
      {story()}
    </Box>
  </ThemeProvider>
));

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
