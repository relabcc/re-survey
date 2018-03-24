import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Bubble from '../app/components/Bubble';
import Underline from '../app/components/Underline';

import { Button1, Button2, Button3 } from '../app/components/Buttons';
import Text from '../app/components/Text';

storiesOf('Bubbles', module)
  .add('Bubble', () => (
    <div>
      <Bubble>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble>
      <Bubble>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
        <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      </Bubble>
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
      <Button2 onClick={action('onClick')}>Next</Button2>
      <Button2 onClick={action('onClick')} disabled>Disabled</Button2>
    </div>
  ))
  .add('Button 3', () => (
    <div>
      <Button3 onClick={action('onClick')}>Next</Button3>
      <Button3 onClick={action('onClick')} disabled>Disabled</Button3>
    </div>
  ));

storiesOf('Underline', module)
  .add('Underline', () => (
    <Underline>拯救他</Underline>
  ));
