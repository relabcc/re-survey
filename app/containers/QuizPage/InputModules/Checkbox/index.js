import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import Box from 'components/Box';
import Flex from 'components/Flex';
import Image from 'components/Image';
import CheckboxGroup from 'components/CheckboxGroup';

class CheckBox extends PureComponent {
  render() {
    const {
      icon,
      options,
      onChange,
      title,
      variation,
      defaultValue,
      ...props
    } = this.props;

    const ImageWrapper = variation === 2 ? (p) => <Box w={1} px={['10%', null, '25%']} {...p} />
      : (p) => <Box w={[1, null, 1 / 4]} px={['33%', null, '1.5em']} {...p} />;
    const OptionsWrapper = variation === 2 ? (p) => <Flex flexWrap="wrap" w={1} mx={[0, null, '10%']} mt="2em" {...p} />
      : (p) => <Flex flexWrap="wrap" w={[1, null, 3 / 4]} mt={['2em', null, 0]} {...p} />;
    return (
      <Flex py="1em" w={1} flexWrap="wrap" {...props}>
        <ImageWrapper>
          <Image src={icon} />
        </ImageWrapper>
        <OptionsWrapper>
          <CheckboxGroup defaultValue={defaultValue} options={map(options, 'label')} onChange={onChange} multiple />
        </OptionsWrapper>
      </Flex>
    );
  }
}

CheckBox.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  variation: PropTypes.number,
  defaultValue: PropTypes.shape(),
};

export default CheckBox;
