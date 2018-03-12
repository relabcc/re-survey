import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Bubble1 from '../app/components/Bubbles/Bubble1';
import Bubble2 from '../app/components/Bubbles/Bubble2';
import Underline from '../app/components/Underline';

import { Button1, Button2 } from '../app/components/Buttons';
import Text from '../app/components/Text';

storiesOf('Bubbles', module)
  .add('Bubble 1', () => (
    <div>
      <Bubble1>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble1>
      <Bubble1>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble1>
    </div>
  ))
  .add('Bubble 2', () => (
    <div>
      <Bubble2>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble2>
      <Bubble2>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble2>
    </div>
  ));

storiesOf('Buttons', module)
  .add('Button 1', () => (
    <div>
      <Button1>拯救他</Button1>
    </div>
  ))
  .add('Button 2', () => (
    <div>
      <Button2>Next</Button2>
    </div>
  ));

storiesOf('Underline', module)
  .add('Underline', () => (
    <Underline>拯救他</Underline>
  ));
