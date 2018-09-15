import React from 'react';
import { View, ImageBackground } from 'react-native';

import styled, { withTheme } from 'styled-components';

import { container, center, start } from './styles';

const getMode = (mod) => {
  switch (mod) {
    case 'start':
      return start;
    default:
      return center;
  }
};

const Container = styled(ImageBackground).attrs({
  resizeMethod: 'resize',
})`
  ${container};
  ${({ mod }) => getMode(mod)}
`;

const ImageBg = ({ theme: { primaryBg }, ...rest }) => (
  <Container
    source={primaryBg}
    defaultSource={primaryBg}
    {...rest} />
);

export default withTheme(ImageBg);