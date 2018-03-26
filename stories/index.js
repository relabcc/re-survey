import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Bubble from '../app/components/Bubble';
import Underline from '../app/components/Underline';

import { Button2, Button3 } from '../app/components/Buttons';
import Text from '../app/components/Text';
import Checkbox from '../app/components/Checkbox';
import CheckboxGroup from '../app/components/CheckboxGroup';
import Degree from '../app/components/Degree';
import TextWithIcon from '../app/components/TextWithIcon';
import Toggle from '../app/components/Toggle';
import TextInput from '../app/components/TextInput';
import Paper from '../app/components/Paper';
import List from '../app/components/List';

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
  ))
  .add('Paper', () => (
    <Paper>
      <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
      <Text>在這些常見的視覺溝通製作霧中的比例形式與掌握度？</Text>
    </Paper>
  ));

storiesOf('Buttons', module)
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

storiesOf('Text', module)
  .add('Underline', () => (
    <Underline>拯救他</Underline>
  ))
  .add('Underline (Inline)', () => (
    <Underline.inline>拯救他</Underline.inline>
  ))
  .add('TextWithIcon', () => (
    <TextWithIcon>有icon Blah</TextWithIcon>
  ))
  .add('List', () => (
    <List>
      <li>1</li>
      <li>List Item</li>
    </List>
  ));

storiesOf('Inputs', module)
  .add('TextInput', () => (
    <div>
      <TextInput onChange={action('onchange')} />
      <TextInput onChange={action('onchange')} error="無效的電子信箱!" />
    </div>
  ))
  .add('Checkbox', () => (
    <div>
      <Checkbox>選項</Checkbox>
      <Checkbox disabled>選項 disabled</Checkbox>
    </div>
  ))
  .add('CheckboxGroup (one)', () => (
    <CheckboxGroup
      onChange={action('onchange')}
      options={[
        '$1000以下',
        '$1000-1999',
        '$2000-2999',
        '$3000以上',
      ]}
    />
  ))
  .add('CheckboxGroup (multiple)', () => (
    <CheckboxGroup
      onChange={action('onchange')}
      multiple
      options={[
        '$1000以下',
        '$1000-1999',
        '$2000-2999',
        '$3000以上',
      ]}
    />
  ))
  .add('CheckboxGroup (disabled)', () => (
    <CheckboxGroup
      disabled
      onChange={action('onchange')}
      options={[
        '$1000以下',
        '$1000-1999',
        '$2000-2999',
        '$3000以上',
      ]}
    />
  ))
  .add('Checkbox (No Underline)', () => (
    <Checkbox noUnderline>選項</Checkbox>
  ))
  .add('Degree', () => (
    <Degree onChange={action('onchange')}>
      <Text f="1.25em">中文</Text>
      <Text>Sub</Text>
    </Degree>
  ))
  .add('Toggle', () => (
    <Toggle onChange={action('onchange')} labelTrue="當然好，已填完！" labelFalse="完全沒興趣" />
  ));
