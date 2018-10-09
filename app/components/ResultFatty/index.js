/* eslint-disable react/jsx-first-prop-new-line, react/jsx-max-props-per-line, react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Box from '../Box';

const Container = styled(Box.inline)`
  svg {
    vertical-align: bottom;
    width: 100%;
  }
`;

const Black = styled.path`
  fill: ${(props) => props.active ? 'black' : '#d0ccc6'};
`;

const BlackCircle = Black.withComponent('circle');

const Check = styled.path`
  fill: ${themeGet('colors.bg')};
  opacity: ${({ active }) => Number(active)};
`;

const Large = ({ active }) => (
  <g>
    <g>
      <Black active={active} d="M77.2,48c0.8,0,1.5-0.7,1.5-1.5S78.1,45,77.2,45s-1.5,0.7-1.5,1.5S76.4,48,77.2,48z" />
      <Black active={active} d="M76.4,50.6c2.6,0.1,5.3-0.7,5.4-3.6c0.2-2.4-1.4-4.6-3.8-5.1h-0.2l0,0c-2.6-0.3-5.8,0.3-6.3,3.4
        c-0.3,2.6,1.6,5,4.3,5.3C76,50.6,76.2,50.6,76.4,50.6z M73.4,44.9c0.8-1.5,2.7-1.4,4.1-1.2s2.4,1.4,2.6,2.8
        c0.2,0.7-0.1,1.5-0.7,1.9c-0.7,0.3-1.5,0.5-2.3,0.5C75,49,72.1,47.3,73.4,44.9z"
      />
      <Black active={active} d="M92.5,48c0.8,0,1.5-0.7,1.5-1.5S93.3,45,92.5,45S91,45.7,91,46.5S91.7,48,92.5,48z" />
      <Black active={active} d="M77.8,39.6c0.8,0.2,2,0.2,2.4-0.6c0.3-0.6,0.2-1.2-0.3-1.7c-0.2-0.2-0.5-0.3-0.7-0.3
        c-0.9-0.5-1.9-0.4-2.7,0.3C75.7,38.2,76.8,39.4,77.8,39.6z"
      />
      <Black active={active} d="M88.9,39.6c0.8,0.2,2,0.2,2.4-0.6c0.3-0.6,0.2-1.2-0.3-1.7c-0.2-0.2-0.5-0.3-0.7-0.3
        c-0.9-0.5-1.9-0.4-2.7,0.3C86.8,38.2,87.9,39.4,88.9,39.6z"
      />
      <Black active={active} d="M85.9,50.5c0.8-0.6,1.1-1.7,0.9-2.7c0.9,1.7,2.6,2.8,4.5,2.8c2.6,0.1,5.3-0.7,5.4-3.6
        c0.2-2.4-1.5-4.6-3.9-5.1h-0.2l0,0c-2.6-0.3-5.8,0.3-6.3,3.4c0,0.1,0,0.3,0,0.4c0-0.1,0-0.1,0-0.2c-0.3-1.1-2-0.6-1.7,0.5
        c0.2,0.7,0.2,1.5,0.2,2.3c0,0.2,0.1,0.7-0.1,0.8s-0.4,0.1-0.4-0.1c0.1-0.5-0.2-1-0.7-1.1c-0.1,0-0.3,0-0.4,0h-0.1
        c-0.4,0.1-0.6,0.5-0.6,0.8c-0.1,1.1,0.6,2.1,1.7,2.2C85,51,85.5,50.9,85.9,50.5z M88.4,44.9c0.8-1.5,2.7-1.4,4.1-1.2
        s2.4,1.4,2.6,2.8c0.2,0.7-0.1,1.5-0.7,1.9c-0.7,0.3-1.5,0.5-2.3,0.5C90,49,87.1,47.3,88.4,44.9z"
      />
      <Black active={active} d="M110.8,60.3L110.8,60.3c0-9.4-1.5-18.9-5.9-27.3c-1.7-3.5-4.4-6.4-7.9-8.3c-4.1-2-8.5-3.1-13-3.2
        c-1.1-0.1-2.3-0.1-3.4,0c1.4-1.6,2.5-3.3,3.3-5.3c2.1-5,1.9-10.6-0.4-15.5c-0.5-0.7-1.4-1-2.2-0.5c-0.1,0.1-0.2,0.1-0.2,0.2
        c-7,6-11.5,14.4-10.6,23.6c-3.4,1.6-6.4,3.9-8.8,6.9c-4.8,5.8-7.4,13.1-9.3,20.3C30.7,55.3,11.2,73,6.5,94.6
        c-2.6,12-0.8,25.1,6.7,35.1c7.2,9.6,18.5,15.5,30,18.2c14.3,3.4,29.4,1.7,42.7-4.8c0.4-0.2,0.7-0.5,0.8-0.9L87,142
        c0.2,0,0.5-0.2,0.6-0.4c1.3,0.4,2.7,0.9,3.9,1.4l5.8,1.8c0.5,0.2,1.1-0.1,1.2-0.7l0,0c0.1-0.3,0.1-0.6,0.2-0.8
        c0.5-0.1,0.8-0.5,0.9-0.9l0.2,0.5l1,0.3c0.6,0.4,1.3,0.7,2,0.9c0.4,0.1,0.8,0.2,1.2,0.1c1.6-0.5,1.8-4,2.1-5.2
        c1.2-4.5,2.3-9,3.1-13.5c3.6,4.8,8.7,7,14.8,7.3c5.9,0.3,12.5-0.8,16.1-5.9c0.1-0.1,0.2-0.2,0.3-0.4c10.9-17.5,0.6-38.9-11.5-52.8
        C123.9,68.1,117.8,63.1,110.8,60.3z M81.5,4.3c1.3,4.1,0.9,8.6-1.3,12.4c-1,1.7-2.2,3.2-3.6,4.5c-1,0.8-2,1.6-3.1,2.2
        C72.8,16,76.3,9.4,81.5,4.3L81.5,4.3z M77.1,25.1c0,0.1,0,0.3,0,0.4l-0.8-0.2L77.1,25.1z M84.9,139.3c-0.3,0.2-0.5,0.5-0.6,0.8
        h-0.1c-20.5,10-49.3,7.9-65.6-9.4C1.9,113.1,8.4,85.7,24.3,70c7.7-7.8,17.5-13.1,28.3-15.4c-0.4,2.3,0,4.7,1.3,6.6
        c0.9,1.5,3.3,0.1,2.3-1.4c-1.9-2.8-1.3-6.6,1.5-8.5c1.1-0.8,2.5-1.2,3.8-1.1c0.8-0.1,1.3-0.7,1.2-1.5c-0.1-0.7-0.6-1.2-1.2-1.2
        c-2,0-3.9,0.6-5.5,1.7c1.4-5.1,3.5-9.9,6.4-14.3c2.2-3.2,5.2-5.8,8.7-7.6c0.4,0.4,1.1,0.6,1.7,0.4c4.1,1.3,8.4,2.2,12.7,2.7
        c4.1,0.5,9.4,1.2,13.4-0.3l0,0c1.7,1.8,3,3.8,4,6c3.5,7.2,4.7,15.3,4.8,23.3l-0.5-0.2c-2-0.6-4.2-1-6.3-1.1
        c-2.5-2.5-5.6-4.3-9-5.3c-0.1,0-0.2,0-0.3,0c-4.8-1-10.3-0.7-15.2-0.7h-0.2c-1.3-1.6-3.1-2.8-5.1-3.2c-1.4-1.2-2.2-3-2-4.8
        c0.1-1.3-1.9-1.3-2,0c-0.2,1.6,0.2,3.2,1,4.5c-0.8,0-1.5,0.2-2.2,0.4c-1.2,0.4-0.7,2.4,0.5,2c3-0.9,6.3,0.1,8.3,2.6
        c1.8,2.6,0,5.5-2.5,6.9c-1.1,0.6-0.1,2.4,1,1.8c3-1.7,5.1-5,3.9-8.4c3.4,0,7-0.1,10.5,0.2c-0.3,0.9-0.5,1.9-0.5,2.8
        c-0.5-0.4-1.2-0.6-1.9-0.5c-1.1,0.1-1.1,1.9,0,1.8c1-0.1,1.3,0.5,1.2,1.4c-0.2,1.1-1,1-1.7,0.4c-0.4-0.3-0.9-0.3-1.3,0.1l-0.1,0.1
        c-0.4,0.7-1.1,1.5-1.8,0.6c-0.2-0.3-0.4-0.6-0.5-1c0-0.3,0-0.3,0-0.3c1-0.5,0.1-2-0.9-1.5c-1.6,0.7-0.8,3.1,0,4.1
        c0.5,0.6,1.3,1,2.1,1c0.8-0.1,1.4-0.5,1.9-1.1c0.6,0.4,1.4,0.5,2.1,0.3c0.3-0.1,0.6-0.3,0.8-0.5c0.1,2.3,0.3,4.6,0.7,6.9
        c0.1,0.5,0.7,0.9,1.2,0.7c0.2,0,0.4-0.1,0.5-0.3l1.9-2.3l1.4,3.4c0.3,0.5,0.9,0.7,1.4,0.4c0.1-0.1,0.2-0.1,0.3-0.2l0.1-0.1l1,2.8
        c0.1,0.5,0.7,0.9,1.2,0.7c0.2,0,0.4-0.1,0.5-0.3l0.8,0.3c0,0.3,0.1,0.7,0.2,0.9l1.2,1.7l-0.7,0.5c-0.7,0.5-1,1.4-0.6,2.2
        c-0.2-0.1-0.4-0.3-0.6-0.4c-0.8-0.5-1.6-0.9-2.5-1.3c-0.7-0.2-1.5-0.4-2.2-0.6c-1.5-0.9-2.3-2.7-4-1.6l-1.2-1.8
        c-0.3-0.5-0.9-0.7-1.4-0.4c-0.2,0.1-0.3,0.2-0.4,0.4c-1.4,1.1-2.6,1-3.4-0.4c0.5,0.3,1.2,0.2,1.5-0.3c0.1-0.2,0.2-0.5,0.2-0.8
        c-0.3-1.7-0.3-5.6-1.8-6.8s-5.3-0.1-7,0l-22,1.8c-0.6,0-1,0.4-1,1c0,0.1,0,0.2,0,0.3l2.3,8.7c-2.7,0.3-7.3,0.6-7.8,3.3
        c-0.1,0.4-0.1,0.7,0,1.1c-3.3-2.5-7.2-4.2-11.3-5c-2.1-0.4-3.1,2.8-0.9,3.3c4.3,0.8,8.3,2.8,11.5,5.6c-6.6,2.6-13.1,5.5-19.4,8.9
        c-0.5,0.3-0.7,0.9-0.4,1.4c0,0.1,0.1,0.2,0.2,0.2c4,4.2,7.8,8.7,11.8,13c-3.1,0.7-6.1,1.7-9.1,2.9c-2,0.9-0.3,3.8,1.7,2.9
        c5.9-2.5,12.3-3.8,18.7-3.9c0.3,0.2,0.7,0.2,1,0c3.9-0.1,7.8,0.1,11.6,0.4c5.2,0.5,10.3,1.3,15.4,2.4c2.1,0.5,4.3,1,6.4,1.6
        c1.5,0.4,4.6,0.7,6.1,1.9l-3.5,2.1c-1.2,0.7-1.1,2.8,0.4,3.1l0.1,2.1c-0.9,0.3-1.4,1.2-1.2,2.1c0.1,0.3,0.2,0.5,0.4,0.7l1.9,1.7
        l-1.2,1.4c-0.5,0.8-0.2,1.9,0.6,2.3C91.2,134.3,86.6,138.1,84.9,139.3L84.9,139.3z M98.5,67.1c-0.1,0.3-0.1,0.5-0.2,0.8
        c0.1,1,0.3,2,0.5,3c-0.6-0.2-1.3-0.1-1.9,0.2c-0.4-1.1-0.8-2.2-1.2-3.3c-0.1-0.5-0.7-0.9-1.2-0.7c-0.2,0-0.4,0.1-0.5,0.3l-0.2,0.2
        c-0.5-1.1-1-2.3-1.4-3.4c-0.3-0.5-0.9-0.7-1.4-0.4c-0.1,0-0.2,0.1-0.2,0.2l-1.4,1.8c-0.2-1.6-0.3-3.3-0.3-4.9
        c-0.1-2.1-0.1-4,0.2-5.9c0.4-0.1,0.6-0.5,0.7-0.8l0.7,0.1c0.1,0.2,0.3,0.3,0.6,0.4c2.6,0.7,5,1.9,7,3.7c-0.8,0.3-1.4,0.7-1.9,1.3
        C94,62.5,96.1,65.3,98.5,67.1z M95,100c-0.2-0.5-0.5-0.9-1-1.2c-0.8-0.6-1.5-1.1-2.2-1.6c1.3,0.3,2.5,0.6,3.8,1.1
        c0.8,0.3,4.7,2.4,6.3,2.8c0,0.7,0.1,1.4,0.2,2.1c0.2,2,0.5,4.1,0.9,6.2c-2.4-1.5-7.3-2.2-8.5-2.4l0,0c0.1-0.7,0.1-1.3,0.2-2
        C94.8,103.5,95.5,101.4,95,100z M92.5,106.1c0,0.4-0.1,0.9-0.1,1.4c0-2.5,0-5-0.1-7.4c0.3,0.2,0.6,0.5,0.7,0.8
        C93.5,102,92.6,104.9,92.5,106.1L92.5,106.1z M98.7,97.3c-2.9-1.2-6-2.1-9.1-2.6v-0.3c0-0.6-0.4-1-1-1c-7.2-0.9-14.5-1.3-21.8-1.4
        c0-1.4,0-2.8,0.2-4.2c6-0.2,12,1.1,17.9,2.1c5.5,0.9,11.2,1.6,16.6,3.3c0.1,1.8,0.1,3.6,0.2,5.4C100.7,98.1,99.5,97.7,98.7,97.3
        L98.7,97.3z M91.1,120l-0.1,0.8c-0.1-0.2-0.2-0.4-0.3-0.5L91.1,120z M90.5,125.7v0.2V125.7C90.5,125.8,90.5,125.8,90.5,125.7
        L90.5,125.7z M90.2,112.9c-0.5-0.2-1-0.4-1.4-0.6c0.5-4.7,0.7-9.5,0.8-14.2c0.2,0.2,0.4,0.4,0.6,0.6l0,0v0.1
        C90.4,103.6,90.3,108.3,90.2,112.9L90.2,112.9z M86.5,111.7c-1.4-0.3-2.8-0.6-4-0.9c-5.8-1.5-11.6-2.5-17.5-3.2
        c-4.6-0.6-9.3-0.8-13.9-0.7c0.1-4.2,0.3-8.3,0.7-12.4c11.9-0.8,23.8-0.5,35.7,0.8c0,0.1,0,0.2,0.1,0.3c0,5.1-0.2,10.2-0.7,15.2
        C86.7,111,86.6,111.3,86.5,111.7L86.5,111.7z M49.8,84.1L49.8,84.1c-0.1-0.4-0.2-0.6-0.3-0.9c-0.4-1.2-0.9-1.8-0.1-2.8
        s1.8-0.9,2.9-1.1c1.7-0.3,3.5-0.6,5.2-0.9c3.8-0.6,7.6-1,11.5-1.2c1.8-0.1,3.6-0.3,5.3-0.2c0.8,0,2.4-0.2,3.1,0.4
        c0.4,0.5,0.7,1,0.9,1.6c-2.1,0.2-4.3,0.5-6.4,0.8c-5.6,0.8-11.2,1.9-16.7,3.4c-0.5,0.1-0.8,0.5-0.7,1c-0.1,0.3,0,0.6,0.1,0.8
        c1.4,2.2,2.3,4.7,2.6,7.3c-1.5,0-3,0.1-4.4,0.2C51.7,89.6,50.8,86.9,49.8,84.1z M50.6,92.5c-0.5,0.1-0.8,0.5-0.8,0.9
        c-0.4,4.5-0.7,9-0.8,13.6c-2.8,0.1-5.7,0.4-8.4,0.9c-4-4.3-7.8-8.7-11.8-12.9c6.2-3.3,12.7-6.2,19.3-8.7c0.1,0,0.3,0,0.4,0
        C49.1,88.4,49.9,90.4,50.6,92.5z M85,87.8l-0.6-0.1c-6-1-12.1-2.3-18.2-1.9c-0.5,0-0.9,0.3-1,0.8c-0.3,1.8-0.4,3.6-0.4,5.5
        c-1.8,0-3.7,0-5.5,0.1c-0.3-2.6-1.1-5.1-2.4-7.4c5.6-1.4,11.4-2.5,17.1-3.3c2.8-0.4,6.3-1.3,9.2-0.9c0.7-0.4,1.5-0.1,1.9,0.6l0,0
        L85,83.4l0,4.3C85,87.7,85,87.7,85,87.8z M78.2,75.1c-1.6-0.9-4.5-0.3-6.2-0.2c-5.2,0.2-10.3,0.7-15.4,1.5l-2.1-7.8l15.9-1.3
        l8.3-0.7c1.9-0.2,1.9-0.3,2.5,1.4c0.4,1.4,0.6,2.8,0.8,4.3c0,0,0,0,0,0.1c-0.3-0.4-1-0.5-1.4-0.2c-0.1,0.1-0.2,0.2-0.3,0.3
        c-0.6,1.1-1.1,2.2-1.5,3.4C78.7,75.5,78.4,75.3,78.2,75.1L78.2,75.1z M86.9,88.1C87,88,87,87.8,87,87.7c0-1.1,0.2-2.3,0.3-3.6
        c0.1,0.1,0.2,0.1,0.3,0.1l9.7,2.3c1.3,0.3,1.8-1.7,0.6-2l-9.7-2.3c-0.3-0.1-0.5,0-0.8,0.1c0-1.1-0.1-2.2-0.4-3.2
        c-0.1-0.4-0.4-0.6-0.7-0.7c-2-0.2-4-0.1-5.9,0.2l0,0l-0.1-0.1c0-0.1,0.1-0.2,0.1-0.3c0.2-1.3,0.6-2.5,1.1-3.6
        c1.5,1.3,3.6,2.1,5.1,0.8l1,1.5c0.3,0.5,0.9,0.7,1.4,0.4c0.1-0.1,0.2-0.1,0.3-0.2c0.6-0.6,1.2,1,1.5,1.2c0.8,0.5,1,0.3,1.9,0.4
        c2.8,0.4,5.4,2.5,7.4,4.7c0.8,2.5,1.2,5,1.4,7.6C96.6,89.7,91.8,88.7,86.9,88.1L86.9,88.1z M96.8,142.6l-6.4-2
        c-0.3-0.1-0.7-0.2-1-0.4c1.5-1.2,2.5-2.9,2.9-4.8c0.2-1,0.1-2-0.3-3l1.4-13.6l0,0c0.7-0.4,1-1.2,0.8-1.9c-0.1-0.4-0.3-0.7-0.5-1
        c0.2-1.6,0.3-3.3,0.5-4.9l0.2-1.8c1.4,0.2,2.7,0.5,4.1,0.8c0.7,0.2,3.7,1.5,4,1.2c-0.8,1,0.5,2.3,1.3,1.6l0.2,1
        C101.3,123.3,98.9,132.9,96.8,142.6L96.8,142.6z M100.5,141.1c-0.4-0.1-0.8-0.2-1.2-0.2c1.8-7.9,3.7-15.7,5.7-23.5
        c0.2,0.6,0.4,1.2,0.6,1.7C104.1,126.5,102.3,133.8,100.5,141.1L100.5,141.1z M104.5,136.8c-0.3,1.1-0.7,2.3-0.9,3.4
        c-0.3,0.6-0.4,1.3-0.2,2l-0.8-0.4l0.2-0.3c0.2-0.3,0.2-0.7,0-1c1.6-6.1,3-12.2,4.3-18.3c0.1,0.3,0.3,0.5,0.4,0.7
        C106.7,127.6,105.7,132.2,104.5,136.8L104.5,136.8z M137.5,124.6c-0.1,0.1-0.1,0.1-0.2,0.2c-3.4,5.3-12.2,5.4-17.7,4
        c-6.4-1.6-9.8-7.5-11.7-13.4c-1.9-6.6-3-13.4-3.1-20.3c-0.2-5.7-0.5-11.4-3.2-16.5l0.8-0.6c0.8-0.5,1.1-1.5,0.6-2.3l-1.3-1.9
        c0.3-0.4,0.4-0.9,0.5-1.4c0.1-0.7-0.8-4.3-0.5-4.4c0.8-0.5,1.1-1.6,0.6-2.4c-0.1-0.2-0.3-0.4-0.6-0.6c-0.8-0.4-4.4-2-1.3-3.7
        c0.5-0.3,1.9,0.1,2.4,0.2c1.7,0.3,3.4,0.7,5,1.2c3.1,1.1,6.1,2.6,8.8,4.5c5.7,4.1,10.6,9.2,14.5,15
        C139.7,94.5,145.9,110.8,137.5,124.6L137.5,124.6z"
      />
      <Black active={active} d="M82.7,98.2c-9.1-1.1-18.1-1.8-27.2-2.2c-0.4,0-0.8,0.2-0.9,0.6c-0.5,0.1-0.8,0.5-0.7,0.9
        c0,0,0,0,0,0.1c0.1,1.6-0.2,4.5,1,5.8c1.5,1.5,5.5,1.2,7.3,1.4c6.8,0.7,13.7,1.3,20.6,1.6c0.6,0,1-0.4,1-1c0-2.1,0-4.1,0-6.2
        C83.7,98.7,83.3,98.3,82.7,98.2z M68,103.4c-2.3-0.2-4.7-0.4-7-0.7c-1.6-0.2-2.6-0.1-3.9-1.2s-1.1-2-1.2-3.4
        c8.6,0.3,17.2,1,25.8,2v4.2C77.1,104.1,72.6,103.8,68,103.4z"
      />
      <Black active={active} d="M47.6,89.2c-4.6,1.4-8.9,3.4-12.9,6.1c-1.1,0.7-0.1,2.5,1,1.8c3.8-2.6,8-4.6,12.4-5.9
        c0.5-0.1,0.9-0.7,0.7-1.2C48.7,89.3,48.1,89,47.6,89.2z"
      />
      <Black active={active} d="M46.1,93.6c-3.3,1.3-6.4,3.2-9.2,5.4c-1,0.8,0.4,2.3,1.5,1.4c2.5-2,5.3-3.7,8.3-4.9
        C47.8,95.1,47.3,93.1,46.1,93.6z"
      />
      <Black active={active} d="M45.8,97.6c-2.2,1.4-4.5,2.7-6.8,3.9c-1.2,0.6-0.2,2.3,1,1.8c2.4-1.1,4.6-2.4,6.8-3.9
        C47.9,98.6,46.9,96.9,45.8,97.6z"
      />
      <Black active={active} d="M99,51c1.8-1.7,1.9-4.5,0.2-6.3l0,0c-0.9-1-2.4,0.5-1.4,1.5c0.9,1,0.9,2.5-0.1,3.4c0,0,0,0-0.1,0.1
        C96.6,50.4,98,51.8,99,51z"
      />
      <Black active={active} d="M77,69.5c-5.6,0.1-11.1,0.6-16.6,1.5c-1.3,0.2-0.7,2.2,0.5,2c5.3-0.9,10.7-1.4,16.1-1.5
        c0.6,0,1-0.5,1-1C78,69.9,77.6,69.5,77,69.5z"
      />
      <Black active={active} d="M122.4,65c1.2,0.4,2.3,1,3.2,1.8c1,0.9,2.4-0.6,1.4-1.4c-1.2-1.1-2.5-1.9-4.1-2.4
        C121.7,62.7,121.2,64.6,122.4,65z"
      />
      <Black active={active} d="M129.2,70.8c0.4,0.4,1,0.4,1.4,0l0,0c0.4-0.4,0.4-1,0-1.4l0,0l-1.2-1.5c-0.4-0.4-1-0.4-1.4,0l0,0
        c-0.4,0.4-0.4,1,0,1.4L129.2,70.8z"
      />
      <Black active={active} d="M131,73l3.9,3.9c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4l-3.9-3.9c-0.4-0.4-1-0.4-1.4,0S130.6,72.6,131,73
        z"
      />
      <Black active={active} d="M12.9,69.9c-2.5,2.7-4.7,5.7-6.5,9c-0.6,1.2,1.1,2.2,1.8,1c1.7-3.1,3.8-6,6.2-8.6
        C15.3,70.4,13.8,69,12.9,69.9z"
      />
      <Black active={active} d="M3.6,83.7c-0.2,0.8-0.4,1.6-0.5,2.4c-0.3,1.3,1.7,1.8,2,0.5c0.2-0.8,0.4-1.6,0.6-2.4
        C5.9,83,3.9,82.5,3.6,83.7z"
      />
      <Black active={active} d="M1.4,91c-0.3,1.7-0.4,3.4-0.2,5.1c0.1,1.3,2.2,1.3,2.1,0c-0.2-1.5-0.1-3.1,0.2-4.6
        C3.6,90.3,1.6,89.7,1.4,91z"
      />
      <Black active={active} d="M1.3,98.4c-0.6,0-1,0.4-1,1v0.9c0,0.6,0.4,1,1,1s1-0.4,1-1v-0.9C2.3,98.9,1.8,98.4,1.3,98.4z" />
      <Black active={active} d="M1,102.4c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S1.6,102.4,1,102.4z" />
      <Black active={active} d="M10.8,45.1c0.6,0.3,1.2,0.6,1.8,0.9c7.3,3.2,18.5-1,22.7-7.7c1.6-2.7,2.1-5.8,1.6-8.8
        c0.3-4.4-1-8.7-3.7-12.1c-4.8-6.2-14.1-9.8-21.5-5.8c-1.9,1-3.5,2.4-4.6,4.2c-2,2.8-3.1,6.3-3.1,9.9c-0.5,1.6-0.8,3.3-0.9,4.9
        c-0.2,1.2-0.3,2.4-0.2,3.7C3.4,39.1,6.4,43.2,10.8,45.1z M31.2,24.8c0.6,1.2,1,2.5,1.2,3.8c0,0.1,0,0.1,0,0.2l-0.2,0.1
        c-0.2-1.8-0.7-3.5-1.5-5.1C30.8,24.1,31,24.5,31.2,24.8z M24.4,14.6c-0.5-0.1-1.1-0.2-1.6-0.2L22.3,14
        C23,14.1,23.8,14.3,24.4,14.6z M19.7,21.7l-0.4,0.2c-0.7-0.2-1.4-0.2-2.1-0.2C18,21.6,18.8,21.6,19.7,21.7z M16.4,21.7
        c0.2,0,0.4,0,0.6,0C16.7,21.7,16.5,21.7,16.4,21.7L16.4,21.7z M12.4,42.8l-0.2-0.1h-0.1C12.2,42.8,12.3,42.8,12.4,42.8L12.4,42.8z
        "
      />
    </g>
    <Check active={active} d="M11.3,27.7l4.8,7.2c0.4,0.6,1.2,0.8,1.8,0.5c0.1-0.1,0.2-0.1,0.2-0.2l9.7-10c1.1-1.2-0.7-3-1.9-1.8
      l-9.7,10l2,0.3l-4.8-7.2C12.6,25.1,10.4,26.4,11.3,27.7L11.3,27.7z"
    />
  </g>
);

const Medium = ({ active }) => (
  <g>
    <g>
      <Black active={active} d="M241,47.8c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6l0,0
        C239.4,47.1,240.1,47.8,241,47.8L241,47.8z"
      />
      <Black active={active} d="M240.1,50.6c2.7,0.1,5.5-0.7,5.7-3.7c0.2-2.5-1.5-4.8-4-5.3h-0.2l0,0c-2.7-0.3-6,0.3-6.5,3.5
        c-0.3,2.7,1.7,5.2,4.4,5.5C239.6,50.6,239.9,50.6,240.1,50.6z M237,44.6c0.8-1.5,2.8-1.5,4.3-1.3c1.4,0.3,2.5,1.4,2.7,2.9
        c0.2,0.8-0.1,1.5-0.8,2c-0.8,0.4-1.6,0.5-2.4,0.5C238.6,48.9,235.6,47.1,237,44.6L237,44.6z"
      />
      <BlackCircle active={active} cx="256.9" cy="46.3" r="1.6" />
      <Black active={active} d="M241.6,39.1c0.8,0.2,2.1,0.2,2.6-0.6c0.3-0.6,0.2-1.3-0.3-1.8c-0.2-0.2-0.5-0.3-0.8-0.4
        c-0.9-0.5-2-0.4-2.8,0.3C239.3,37.7,240.5,38.9,241.6,39.1z"
      />
      <Black active={active} d="M253.1,39.1c0.8,0.2,2.1,0.2,2.6-0.6c0.3-0.6,0.2-1.3-0.3-1.8c-0.2-0.2-0.5-0.3-0.8-0.4
        c-0.9-0.5-2-0.4-2.8,0.3C250.9,37.7,252,38.9,253.1,39.1z"
      />
      <Black active={active} d="M250,50.5c0.8-0.7,1.2-1.7,1-2.8c0.9,1.8,2.7,2.9,4.7,2.9c2.7,0.1,5.5-0.7,5.7-3.7
        c0.2-2.5-1.5-4.8-4-5.3h-0.2l0,0c-2.7-0.3-6.1,0.3-6.5,3.5c0,0.1,0,0.3,0,0.4c0-0.1,0-0.1,0-0.2c-0.3-1.1-2-0.7-1.8,0.5
        c0.2,0.8,0.3,1.6,0.4,2.4c0,0.2,0.1,0.8-0.1,0.9s-0.4,0.1-0.4-0.1c0.1-0.5-0.3-1.1-0.8-1.2c-0.1,0-0.2,0-0.3,0h-0.1
        c-0.4,0.1-0.7,0.5-0.7,0.9c0,1.2,0.9,2.1,2.1,2.1C249.3,50.7,249.7,50.6,250,50.5z M252.5,44.6c0.8-1.5,2.8-1.5,4.3-1.3
        c1.4,0.3,2.5,1.4,2.7,2.9c0.2,0.8-0.1,1.5-0.8,2c-0.8,0.4-1.6,0.5-2.4,0.5C254.2,48.9,251.2,47.1,252.5,44.6L252.5,44.6z"
      />
      <Black active={active} d="M249.2,56.4c-1.1,0.2-1.2,2,0,1.8c1-0.1,1.4,0.5,1.2,1.5c-0.2,1.2-1,1.1-1.8,0.4
        c-0.4-0.4-1-0.3-1.3,0c0,0-0.1,0.1-0.1,0.2c-0.5,0.8-1.1,1.5-1.8,0.6c-0.2-0.3-0.4-0.6-0.5-1c-0.1-0.3-0.1-0.3,0-0.3
        c1.1-0.5,0.1-2.1-0.9-1.6c-1.7,0.8-0.9,3.2,0.1,4.2c0.5,0.7,1.3,1,2.2,1c0.8-0.1,1.5-0.5,2-1.2c0.6,0.4,1.5,0.6,2.2,0.3
        c0.9-0.3,1.5-1.1,1.7-2C252.7,58.4,251.4,56.2,249.2,56.4z"
      />
      <Black active={active} d="M300.6,79.7c-6.7-8.7-15-16.1-25.7-18.5c0.1-0.2,0.1-0.5,0.1-0.7c-0.7-10.1-1.9-19.9-7.5-28.6
        c-2-3.4-5-6.1-8.5-7.8c-2-0.8-4-1.2-6.1-1.4c3.3-3,5.5-7,6.2-11.3c0.2-0.9-0.3-1.7-1.2-2c-0.3-0.1-0.6-0.1-0.8,0
        c-9.6,1.4-18.5,6.6-22.8,15.5c-4.4,2-8.1,5.2-10.6,9.4c-2.6,4.4-4,9.8-5.4,14.6c-1.5,5.3-2.7,10.8-3.6,16.2
        c-21.7,3.4-41.4,22.4-43.2,44.6c-0.8,10.5,1.9,22.5,9.5,30.3c7.7,7.9,20.1,7.1,30.2,5.4c12.8-2.3,24.8-8,34.7-16.4
        c0.4-0.1,0.8-0.3,1-0.6l1.2-1.4c1.3,3.2,4.5,6.3,6.7,8.2c3.6,3.4,7.9,6,12.5,7.7c5.6,2,11.5,2.8,17.4,2.1
        c5.5-0.6,11.9-1.9,16.4-5.4c4.1-3.1,6.4-8.2,8-13c1.9-5.6,2.7-11.5,2.5-17.4C311.2,98.1,307.3,88.4,300.6,79.7z M255.3,12.9
        c-1.2,3.8-3.6,7-6.9,9.2c-1.9,1.2-4,2.1-6.3,2.6c-1.4,0.2-2.9,0.3-4.4,0.3C241.5,18.4,248,14.5,255.3,12.9z M303.5,130.8
        c-2.6,5.2-6.5,7.7-12,9.3c-5.1,1.5-10.4,1.9-15.7,1.3c-7.6-1-14.6-4.5-19.9-10c-1.1-1.1-5.1-4.9-4.8-6.7c0.1-0.4,0-0.9-0.3-1.3
        c0.5-0.8,0.9-1.6,1.3-2.4c0.6-1.6,0.6-3.3,1.2-5c0.4-0.9,0.5-1.8,0.3-2.8c-0.4-0.6-0.9-1.2-1.5-1.7c0-0.4,1.3-1.6,1.4-2.2
        c0.3-0.8,0.2-1.7-0.3-2.4c0.3,0,0.6,0,0.9-0.1c0.9-0.3,1.6-1,2.1-1.8c0.6-1.3,0.4-2.8-0.4-4c2.7-0.5,5.9,0.6,8.3,1.4
        c3,1.1,5.8,2.6,8.3,4.4c5.3,3.9,9.5,9.1,12.2,15.1c0.9,2.1,4,0.3,3.1-1.8c-2.6-5.6-6.3-10.6-11.1-14.6c4.2-3.4,9.4-5.4,14.8-5.6
        c2.3-0.1,2.3-3.6,0-3.6c-6.2,0.3-12.1,2.5-16.9,6.3c0.7-3.2,1.4-6.3,1.9-9.5c0.3-1.8,1.6-4.9,0.6-6.6c-0.2-0.4-0.5-0.7-0.9-0.9
        c-0.1-0.9-0.1-1.8-0.1-2.7c0-0.6-0.5-1.1-1.1-1.1c-1.2-0.2-2.4-0.3-3.5-0.4c0-0.3-0.1-0.5-0.1-0.8c0-0.2-0.1-0.3-0.2-0.5
        c-0.7-3.8-1.6-7.5-2.8-11.1c-0.2-0.6-0.8-0.9-1.4-0.7c-0.2,0.1-0.4,0.2-0.6,0.4l-0.5,0.9c-1.1-0.9-2.7-0.7-3.6,0.4
        c-0.4-0.4-0.8-0.9-1.1-1.4c-0.3-0.5-1-0.7-1.6-0.4c-0.1,0-0.1,0.1-0.2,0.1c-1.2,0.9-0.6,0.5-1.5-0.6c-0.7-1-2-1.3-3.1-0.9
        c-2.2,0.6-4.5,2.4-6.5,3.5l-7.6,4.2c-0.3,0.1-0.5,0.4-0.5,0.7h-0.6l-15.3-0.7c-0.5,0-1,0.3-1.1,0.9c-0.2,0.3-0.2,0.6-0.2,0.9
        c1.6,7,3.1,13.9,4.7,20.9c-2.9,0.7-5.8,1.6-8.6,2.8l-0.1-0.2c-2.7-4.4-7.3-7.3-12.4-8c-2.3-0.3-2.2,3.3,0,3.6
        c3.9,0.6,7.3,2.9,9.3,6.2c-3.5,1.9-6.6,4.3-9.3,7.2c-1.6,1.7,0.9,4.2,2.5,2.5c6.5-7,15.2-10.3,24.4-11.6c4.3-0.6,8.9-1.3,13.2-0.4
        c1.3,0.3,2.6,0.7,3.7,1.3c0.7,0.4,1.4,0.9,2,1.4c0.4,1.1,0.2,1.6-0.7,1.4c-1.5,0.8-2.5,0.1-3.6,1.8c-0.3,0.6-0.3,1.2,0,1.8
        c0.4,0.6,1.1,0.9,1.4,1.4c0.7,0.2,0.8,0.3,0.1,0.3l-0.7,0.9c-0.6,1.1-0.6,2.4,0,3.4c0.5,1.3,0.8,0.9,0.5,2.4
        c-0.1,0.6-0.4,1.1-0.5,1.6c-0.2,1.8-0.8,3.5-1.8,5c-0.9,1.3-1.8,2.4-2.8,3.6c-0.3,0.1-0.5,0.2-0.7,0.4
        c-7.9,6.8-17.3,11.8-27.4,14.5c-4.8,1.3-9.8,2-14.8,2.1c-5.3,0.1-11.1-0.1-15.6-3.3c-8.1-5.7-11.1-17.3-11-26.7
        c0.1-10.8,4.4-21.1,11.9-28.8c8-8.2,18-14.2,29.4-15.8c0.8-0.1,1.3-0.7,1.3-1.5c0-0.1,0-0.1,0-0.2c1.3-8.9,3.6-17.7,6.6-26.2
        c1.8-5.3,5.5-9.8,10.4-12.5c0.1,0,0.1,0,0.2,0c0.2,0.2,0.4,0.3,0.6,0.4h0.2c0.3,0,0.6,0,0.9-0.1c4.1,1.1,8.4,1.8,12.6,2
        c3.9,0.2,8.7,0.6,12.4-1c1.7,1.7,3.1,3.6,4.2,5.7c4.4,7.9,5.4,16.4,6,25.3V60H271c-2.3-0.3-2.2,3.3,0,3.6
        c9.3,1.2,17.2,6.9,23.2,13.8c5.8,6.7,10.6,14.2,12.5,23C309,110.8,308.1,121.8,303.5,130.8z M268.5,94c-2.6-0.6-5.2-0.8-7.9-0.5
        c0-0.8,0.1-1.6,0.1-2.3c2.5-0.1,5,0,7.4,0.2c1.4,0.1,1.4-2.1,0-2.2c-2.4-0.2-4.9-0.2-7.3-0.1c0-0.6,0-1.3,0.1-1.9
        c2.2-0.1,4.4-0.1,6.7,0s6.7-0.6,7.4,2.1c0.5,1.6-0.9,5.3-1.3,7c-0.4,2.1-0.9,4.2-1.3,6.3c-3.6-2.4-7.7-4.1-12-4.9
        c0-0.6,0-1.1,0.1-1.7h0.1c2.4-0.3,4.9-0.2,7.3,0.4C269.3,96.5,269.9,94.4,268.5,94z M271.8,85c-3.6-0.3-7.2-0.3-10.8-0.2
        c0-0.6,0-1.1,0-1.6c4.3,0,8.6,0.3,12.9,0.8c0,0.4,0,0.7,0,1.1C273.2,85.1,272.4,85.1,271.8,85L271.8,85z M261,81
        c-0.1-3.7-3.2-3.7-6.6-4.6c-0.1,0-0.2,0-0.3,0c-0.1-0.1-0.2-0.1-0.4-0.1c-2-0.5-4.8-0.2-6.9-0.3l-3.2-0.2l5.7-3.2l3.8-2.1
        c1.6-0.9,1.9-1.2,3.6,0.3c0.7,0.7,1.2,1.6,2.4,1.4c0.5,0,0.9-0.4,1.1-0.8c0.5,0.5,1,1,1.5,1.5c0.5,0.4,1.2,0.4,1.6,0
        c0.1-0.1,0.2-0.3,0.3-0.5l1.6,0.1c0.3,0.5,1,0.7,1.5,0.4c0.1-0.1,0.2-0.2,0.3-0.3c0.9,2.9,1.6,5.9,2.1,8.9
        C266.5,81.2,263.8,81,261,81z M255.6,78.9c1.2,0.3,2.5,0.6,2.9,1.3c0.8,1.2,0.1,4.7,0,6.1c-0.1,3.6-0.3,7.3-0.4,10.9
        c-0.6,0-1.3,0-1.9,0.1c0-0.3-0.1-0.6-0.4-0.8l-0.4-12.3C255.7,82.5,255.7,80.7,255.6,78.9z M248.8,78.2c2.4,0.1,4.1-0.4,4.4,2.3
        c0.2,1.9,0.2,3.8,0.2,5.7c0.1,3.9,0.2,7.8,0.4,11.7l-0.8,0.3c-4.8-3.1-10.9-2.9-16.4-2.2c-2.2,0.3-4.5,0.6-6.7,1
        c0-0.3-0.1-0.6-0.2-0.9c0-0.1-0.1-0.2-0.1-0.3c-1.4-6.2-2.8-12.4-4.2-18.6L248.8,78.2z"
      />
      <Black active={active} d="M229.1,83.2c0.4,1.4,0.8,2.9,1.2,4.3c0,0.1,0,0.1,0,0.2l0.1,0.3c0.2,0.6,0.8,0.9,1.4,0.8
        c0.2-0.1,0.4-0.2,0.5-0.3c0.1,0,0.2,0,0.3,0c4.9,0.4,9.8,1,14.8,1.2c3.9,0.2,3.3-2.8,3.3-6c0-0.5-0.3-0.9-0.8-1.1
        c-6.3-1-12.8-1.2-19.2-0.7c-0.6-0.2-1.2,0.1-1.4,0.7C229,82.7,229,83,229.1,83.2z M248.4,84.6c0,0.4,0,0.9,0,1.3
        c-0.2,1.7,0.2,1.1-1,1.4c-1.4,0.4-3.9-0.3-5.3-0.4l-9.8-0.8l-0.6-2.1C237.2,83.6,242.8,83.8,248.4,84.6z"
      />
      <Black active={active} d="M256.1,52.5c-0.3-0.1-0.6-0.1-0.9,0.1c-4.9-0.9-10.4-0.7-15.3-0.7c-0.3,0-0.5,0.1-0.7,0.3
        c-1-1.2-2.4-1.9-3.9-2.1c-1.5-0.7-2.3-2.3-2.1-3.9c0.1-1.4-2-1.3-2.1,0c-0.1,1.7,0.4,3.3,1.6,4.5c-0.1,0.6,0.3,1.3,0.9,1.4
        c0.1,0,0.3,0,0.4,0c3.8-0.6,5.7,3.6,3.6,6.5c-0.8,1.1,1,2.2,1.8,1.1c1.4-1.7,1.6-4,0.8-6c4-0.1,7.9-0.1,11.9,0.2
        c0.5,2.2,1.3,4.4,2.4,6.4c0.3,0.5,1,0.7,1.5,0.4c0.1,0,0.1-0.1,0.2-0.1l1.4-1.2l1.6,0.9c0.5,0.3,1.2,0.1,1.5-0.4
        c0.1-0.2,0.2-0.5,0.1-0.8l1.4-0.4c0.5,0.3,1.2,0.1,1.5-0.4c0-0.1,0.1-0.1,0.1-0.2C264.9,54.6,258.2,53.2,256.1,52.5z M258.9,57.7
        l-1-0.5c-0.4-0.2-0.9-0.2-1.3,0.2l-0.9,0.8c-0.6-1.2-1-2.5-1.4-3.8l1,0.2c0.1,0,0.1,0.1,0.2,0.1c1.8,0.5,3.5,1.2,5.1,1.9
        C259.9,56.6,259.3,57.1,258.9,57.7L258.9,57.7z"
      />
      <Black active={active} d="M179.8,45.1c0.6,0.3,1.2,0.6,1.8,0.9c7.3,3.2,18.6-1,22.7-7.7c1.6-2.7,2.1-5.8,1.6-8.9
        c0.3-4.4-1-8.7-3.7-12.1c-4.8-6.2-14.1-9.8-21.4-5.8c-1.9,1-3.5,2.4-4.6,4.2c-0.5,0.6-0.9,1.2-1.2,1.8l-0.3,0.3
        c-0.3,0.3-0.6,0.6-0.9,1c-3.1,3.2-4.7,7.8-3,13.5c0.3,1,0.7,1.9,1.2,2.9C172.7,39.6,175.7,43.4,179.8,45.1z M200.2,24.8
        c0.6,1.2,1,2.5,1.2,3.8c0,0.1,0,0.1,0,0.2l-0.2,0.1c-0.2-1.8-0.7-3.5-1.5-5.1C199.8,24.1,200,24.5,200.2,24.8z M193.4,14.6
        c-0.5-0.1-1.1-0.2-1.6-0.2l-0.5-0.4C192,14.1,192.8,14.3,193.4,14.6z M188.7,21.7l-0.4,0.2c-0.7-0.2-1.4-0.2-2.1-0.2
        C187,21.6,187.8,21.6,188.7,21.7z M185.3,21.7c0.2,0,0.4,0,0.6,0C185.7,21.7,185.5,21.7,185.3,21.7L185.3,21.7z M181.4,42.9
        l-0.2-0.1h-0.1C181.2,42.8,181.3,42.8,181.4,42.9z"
      />
    </g>
    <Check active={active} d="M180.3,27.7l4.8,7.2c0.4,0.6,1.2,0.8,1.8,0.4c0.1,0,0.1-0.1,0.2-0.1l9.7-10c1.2-1.2-0.7-3-1.9-1.9
      l-9.7,10l2.1,0.3l-4.8-7.2C181.6,25,179.3,26.3,180.3,27.7L180.3,27.7z"
    />
  </g>
);

const Small = ({ active }) => (
  <g>
    <g>
      <Black active={active} d="M390.6,50.4c0-0.9-0.7-1.5-1.6-1.5s-1.5,0.7-1.5,1.6c0,0.8,0.7,1.5,1.5,1.5
        C389.9,52,390.6,51.3,390.6,50.4L390.6,50.4z"
      />
      <Black active={active} d="M393.8,51c0.2-2.5-1.5-4.8-4-5.3c-0.1,0-0.1,0-0.2,0l0,0c-2.7-0.3-6,0.3-6.5,3.5
        c-0.3,2.7,1.6,5.2,4.4,5.5c0.2,0,0.5,0,0.7,0C390.8,54.8,393.6,54,393.8,51z M385,48.7c0.8-1.5,2.8-1.5,4.3-1.3
        c1.4,0.2,2.6,1.4,2.7,2.9c0.2,0.8-0.1,1.5-0.8,2c-0.8,0.4-1.6,0.5-2.4,0.5C386.7,53,383.6,51.3,385,48.7z"
      />
      <Black active={active} d="M405.4,45.7c-0.1,0-0.1,0-0.2,0l0,0c-2.7-0.3-6,0.3-6.5,3.5c0,0.1,0,0.3,0,0.4c0-0.1,0-0.1,0-0.2
        c-0.3-1.2-2-0.7-1.8,0.5c0.2,0.8,0.3,1.6,0.4,2.4c0,0.2,0.1,0.8-0.1,0.9s-0.4,0.1-0.4-0.1c0.1-0.5-0.3-1.1-0.8-1.2
        c-0.1,0-0.2,0-0.3,0h-0.1c-0.4,0.1-0.7,0.5-0.7,0.9c-0.1,1.2,0.8,2.2,2,2.3c0.5,0,1-0.1,1.4-0.4c0.8-0.7,1.2-1.7,0.9-2.8
        c0.9,1.8,2.7,2.9,4.7,2.9c2.7,0.1,5.5-0.7,5.7-3.7C409.7,48.5,407.9,46.2,405.4,45.7z M406.8,52.3c-0.8,0.4-1.6,0.5-2.4,0.5
        c-2.1,0.2-5.1-1.6-3.8-4.1c0.8-1.5,2.8-1.5,4.3-1.3c1.4,0.3,2.5,1.4,2.7,2.9C407.7,51.1,407.4,51.9,406.8,52.3L406.8,52.3z"
      />
      <Black active={active} d="M404.9,48.8c-0.9,0-1.6,0.7-1.6,1.6s0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6l0,0
        C406.5,49.5,405.8,48.8,404.9,48.8z"
      />
      <Black active={active} d="M389.6,43.3c0.8,0.2,2.1,0.2,2.5-0.6c0.3-0.6,0.2-1.3-0.3-1.8c-0.2-0.2-0.5-0.3-0.8-0.4
        c-0.9-0.5-2-0.4-2.8,0.3C387.4,41.8,388.5,43,389.6,43.3z"
      />
      <Black active={active} d="M401.2,43.3c0.8,0.2,2.1,0.2,2.5-0.6c0.3-0.6,0.2-1.3-0.3-1.8c-0.2-0.2-0.5-0.3-0.8-0.4
        c-0.9-0.5-2-0.4-2.8,0.3C398.9,41.8,400.1,43,401.2,43.3z"
      />
      <Black active={active} d="M404.7,57c-5.3-1.3-11.4-1-16.8-1c-0.5,0.1-0.9,0.5-0.8,1c0,0.4,0.4,0.8,0.8,0.8
        c5.2,0,11.2-0.3,16.3,0.9C405.4,59.1,405.9,57.3,404.7,57z"
      />
      <Black active={active} d="M397.2,60.6c-1.1,0.1-1.2,2,0,1.8c1-0.1,1.4,0.5,1.2,1.5c-0.2,1.2-1,1.1-1.8,0.4
        c-0.4-0.4-0.9-0.4-1.3,0c-0.1,0.1-0.1,0.1-0.1,0.2c-0.5,0.8-1.1,1.5-1.8,0.6c-0.2-0.3-0.4-0.6-0.5-1c0-0.3,0-0.3,0-0.3
        c1.1-0.5,0.1-2.1-0.9-1.6c-1.7,0.8-0.9,3.2,0,4.2c0.5,0.7,1.3,1,2.2,1c0.8-0.1,1.5-0.5,2-1.2c0.6,0.4,1.5,0.6,2.2,0.3
        c0.9-0.3,1.5-1.1,1.7-2C400.7,62.5,399.5,60.3,397.2,60.6z"
      />
      <Black active={active} d="M424.2,68.3c0-0.1,0-0.3,0-0.4c-0.7-10.1-2.7-23.3-8.2-32c-1.9-3.2-4.7-5.9-8-7.6
        c1.4-1.4,2.7-2.9,3.7-4.6c0.4-0.8,0.2-1.7-0.6-2.2c-0.1-0.1-0.2-0.1-0.4-0.1c-10.1-2.1-20.6-0.2-27.9,7.5c0,0.1-0.1,0.1-0.1,0.1
        c-4.3,2-8,5.2-10.4,9.3c-2.6,4.4-4,9.8-5.4,14.6c-1.5,5.5-2.8,11.1-3.6,16.7c-9.4,0-17.9,5.4-21.8,14c-3.5,7.7-1.7,14.8,2.5,21.2
        c3.4,16.5,12.7,42.8,34.7,36.2c5.7-1.8,10.8-5.1,14.7-9.5c4.6,4.4,9.2,7.8,15.7,8.9c5.9,1,11.4,0.8,16.3-3
        c8.7-6.7,12.3-18.4,15.1-28.6c2.8-2.9,4.7-6.5,5.6-10.4c1-5.9,0.2-12-2.2-17.4C440.4,72.9,432.5,68.6,424.2,68.3z M407.6,24.1
        c-2.3,3.1-5.6,5.2-9.4,6.1c-2.6,0.6-5.4,0.7-8,0.2c-1.1-0.3-2.3-0.6-3.3-1C392.6,24.5,400.1,23,407.6,24.1z M442.3,98.5
        c-1.3,5-4.9,8.7-8.7,11.9c-1.5,1.3,0.2,3.3,1.8,2.9c-2.2,7.3-5.1,14.6-10.5,19.8c-4.2,4-8.9,4.9-14.5,4c-6.2-1-10.4-4-14.8-8.3
        c3.8-5.1,6.7-10.8,8.5-16.9c0.3,0.1,0.5,0.1,0.8,0c3.6-0.5,7.2-0.3,10.6,0.7c3.1,0.7,6.2,1.5,8.5,3.8c0.8,0.7,2,0.7,2.7-0.1
        c0.7-0.7,0.7-1.9,0-2.6c-2.8-2.8-6.4-3.9-10.2-4.8c-3.7-1-7.6-1.3-11.4-0.9c0.3-1.2,0.5-2.4,0.7-3.6c3-1.9,6.6-1.5,10.1-1.9
        c1.8-0.2,2.7-0.4,3-2.3c0.7-3.7,0.5-7.9,0.8-11.6l0.9-12.8c0-0.6-0.5-1.1-1.1-1.1c-0.9,0-1.9,0.1-2.8,0.1l0,0
        c-0.2-0.9-0.5-1.8-0.6-2.7c-0.1-0.5-0.5-0.8-1-0.8c-3.3-0.1-6.6,0.2-9.8,1c-1.3,0.4-2.5,0.8-3.7,1.3c-1.6,0.7-2.9,2.1-4.6,1.5
        c-1.4-0.5-2.8-1.6-4.1-2.2c-1.5-0.7-3.1-1.2-4.7-1.5c-3.4-0.7-6.8-1-10.3-0.8c-0.6,0-1.1,0.5-1.1,1.1c0,0.7,0,1.5-0.2,2.2
        c-0.2,0-0.4,0.1-0.6,0.3c-0.4,0.2-0.6,0.5-0.6,0.9c0.1,4.4,1.9,8.4,3.1,12.6c0.7,2.3,1.3,4.7,1.8,7c0.1,0.6,0.9,3.2,1.3,5
        c-0.7,1.3-1.5,2.6-2.5,3.7c-3.2-1-6.5-1.7-9.9-2.1c-3.3-0.4-7.6-0.9-10.8,0.3c-2.1,0.7-3.4,2.6-3.3,4.8c0.2,1.4,1.1,2.6,2.5,3
        c-0.4,1.9,0.7,3.8,2.5,4.5c0.2,2.7,3.3,4.1,6.2,4.5c0.7,0.6,1.7,0.5,2.3-0.1c3.8-3.7,8.4-7.1,12.1-11c0.3-0.2,0.5-0.4,0.7-0.8
        c0.5-0.6,1-1.2,1.4-1.8c1.9-2.7,3.2-5.7,4-8.9c0.5-1.8,0.9-3.7,1.5-5.5c0.1-0.5,0.6-2.5,0.9-2.4c0.1,0,0.5,2,0.5,2.2
        c0.3,1,1.3,1.5,2.3,1.2c0.3-0.1,0.5-0.2,0.7-0.4c1.2-0.5,2-0.3,2.4,0.8c0.5,0.8,1.6,1.1,2.5,0.6c0.1-0.1,0.2-0.2,0.3-0.2
        c1-0.9,2.1-0.1,2.5,0.8c0.4,0.7,1.2,1,2,0.8c-0.1,0.2-0.2,0.3-0.3,0.4c0,0.5,0.3,1,0.7,1.3c0.1,9.1-2.2,18-6.8,25.8
        c-4,6.8-10,13.5-17.7,16.1c-17.6,6-26-13.1-29.8-27.8c1-0.3,1.6-1.3,1.3-2.3c-0.1-0.2-0.2-0.5-0.4-0.7c-0.8-1-1.6-1.9-2.3-2.9
        c-0.1-0.3-0.3-0.5-0.5-0.7c-3.7-5.6-5.3-11.7-2-18.4c3.5-7.2,11-11.7,19-11.4c0.6,0,1.1-0.2,1.4-0.7c0.5-0.1,0.9-0.6,0.9-1.1
        c1.3-9.1,3.6-18,6.7-26.6c1.8-5.4,5.6-9.9,10.7-12.6h0.1c4.6,1.3,9.3,2.1,14,2.4c3.9,0.2,8.6,0.6,12.4-1c1.7,1.7,3.1,3.6,4.2,5.7
        c4.4,7.9,6.1,19.8,6.7,28.6c0,0.2,0.1,0.3,0.1,0.5c-0.7,0.1-1.4,0.1-2,0.3c-2.2,0.4-1.3,3.8,1,3.4c9-1.6,17.9,2.9,21,11.7
        C442.8,88.4,443.6,93.7,442.3,98.5z M388.3,77.4c3.2,0.5,6.5,1,9.2,2.9c0,0.1,0,0.2,0,0.3c0.4,2.6,0.9,5.1,1.3,7.7
        c-0.5,0-1,0.1-1.4,0.3c-1.2-1.2-2.9-1.7-4.5-1.3c-0.1-0.9-0.6-1.8-1.3-2.3c-1.3-0.9-3.1-0.8-4.3,0.3c-2.7,2.2-2.9,7.6-3.9,10.7
        c-0.1,0.3-0.2,0.6-0.3,0.9c-0.3-1.6-0.7-3.3-1.1-4.9c-1.2-5.1-3.8-10.4-4.2-15.7C381.3,76.5,384.8,76.9,388.3,77.4z M378.8,74.2
        c0.1-0.4,0.1-0.9,0.1-1.3c5.9-0.3,11.8,1.1,16.9,4.2c-2.3-0.8-4.6-1.4-7-1.7C385.5,74.8,382.2,74.4,378.8,74.2z M397.9,78.1
        c0.2,0,0.3,0,0.4-0.1c4.7-3,10.2-4.6,15.8-4.5c0.1,0.3,0.1,0.6,0.2,0.9c-0.1,0.2,0,0.5,0.1,0.7c-5.3,0.6-10.6,1.8-15.6,3.7
        l-0.1-0.1C398.5,78.4,398.2,78.3,397.9,78.1z M418.4,76.9c-0.5,7.2-1,14.3-1.5,21.5c-0.1,0.9,0.1,1.5-0.6,1.9
        c-0.8,0.2-1.6,0.2-2.4,0.2c-1.3,0.1-2.6,0.1-3.9,0.3c-1.3,0.2-2.6,0.5-3.9,1.1c0.3-2.6,0.4-5.3,0.3-7.9c0-0.7-0.4-1.3-1-1.5
        c-0.3-1.2-1.2-2.1-2.4-2.3c-0.5-0.7-1.2-1.2-2.1-1.6l-1.3-7.9C405.7,78.5,412,77.2,418.4,76.9z M362.4,110.6l-1-1.1
        c0.7-0.7,0.6-1.9-0.1-2.5c-0.3-0.3-0.7-0.4-1.1-0.5c0.1-0.6,0.2-1.1,0.3-1.7l1.4-0.1c0.8,0,1.5,0,2.3,0c1.9,0,3.7,0.1,5.5,0.4
        c2.3,0.3,4.6,0.8,6.8,1.4l-0.6,0.6c-2.9,2.7-5.9,5.3-8.7,8c-0.1,0-0.2-0.1-0.4-0.1c-1.2,0.1-2.3-0.6-2.8-1.7
        C364.5,112.2,363.9,110.5,362.4,110.6L362.4,110.6z"
      />
      <Black active={active} d="M430.7,58c2.1-1.7,3.9-3.8,5.3-6.2c0.7-1.2-1.2-2.3-1.8-1.1c-1.2,2.2-2.9,4.2-4.9,5.8
        C428.2,57.4,429.7,58.9,430.7,58z"
      />
      <Black active={active} d="M353.4,38.3c1.6-2.7,2.1-5.8,1.6-8.9c0.3-4.4-1-8.7-3.7-12.1c-4.8-6.2-14.1-9.8-21.5-5.8
        c-1.9,1-3.5,2.4-4.6,4.2c-2.1,2.9-3.3,6.4-3.2,10c-0.5,1.6-0.8,3.3-0.9,4.9c-0.2,1.2-0.3,2.4-0.2,3.7c0.4,4.8,3.5,8.9,7.9,10.7
        c0.6,0.3,1.2,0.6,1.8,0.9C338,49.1,349.2,45,353.4,38.3z M330.2,42.8C330.2,42.8,330.1,42.8,330.2,42.8c0,0,0.1,0,0.2,0.1
        L330.2,42.8z M334.3,21.8L334.3,21.8c0.3,0,0.5,0,0.6,0C334.7,21.7,334.5,21.7,334.3,21.8L334.3,21.8z M337.3,21.9
        c-0.7-0.2-1.4-0.2-2.1-0.2c0.8-0.1,1.7-0.1,2.5,0L337.3,21.9z M340.9,14.4l-0.6-0.4c0.7,0.1,1.4,0.3,2.1,0.6
        C341.9,14.5,341.4,14.4,340.9,14.4L340.9,14.4z M350.4,28.8l-0.2,0.1c-0.2-1.8-0.7-3.5-1.5-5.1c0.2,0.3,0.3,0.6,0.5,1
        c0.6,1.2,1,2.5,1.2,3.8C350.4,28.7,350.4,28.7,350.4,28.8L350.4,28.8z"
      />
      <Black active={active} d="M446.1,40.5l-6.9,1.2c-0.5,0.1-0.9,0.7-0.7,1.2c0,0.2,0.1,0.3,0.2,0.4c0,0.2,0.1,0.4,0.2,0.5
        l0.8,1.3c0,0.4,0.3,0.8,0.7,1l1.6,2.5c-0.3-0.1-0.5-0.1-0.8-0.1c-1,0-1.8,0.8-2,1.8c-0.3,3,3.9,3.3,5.7,2.2
        c0.3-0.2,0.5-0.5,0.5-0.8c0.5-0.2,0.6-0.8,0.4-1.3c0,0,0-0.1-0.1-0.1l-3.2-4.9l3.3-1.9c0.4-0.2,0.6-0.6,0.5-1l0.5-0.1
        C448,42.4,447.4,40.3,446.1,40.5z M441.2,43.7l-0.1-0.2l0.5-0.1L441.2,43.7z M441.8,51.1l-0.3-0.3c0.2,0.1,0.5,0.2,0.7,0.3H441.8z
        "
      />
    </g>
    <Check active={active} d="M328,27.7l4.8,7.2c0.4,0.6,1.2,0.8,1.8,0.5c0.1-0.1,0.2-0.1,0.2-0.2l9.7-10c1.2-1.2-0.7-3-1.9-1.9
      l-9.7,10l2,0.3l-4.8-7.2C329.4,25,327.1,26.3,328,27.7L328,27.7z"
    />
  </g>
);

const ResultFatty = ({ active, ...props }) => (
  <Container {...props}>
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447.4 149.6">
        <Large active={active === 0} />
        <Medium active={active === 1} />
        <Small active={active === 2} />
      </svg>
    </Box>
  </Container>
);

ResultFatty.propTypes = {
  active: PropTypes.number,
};

export default ResultFatty;