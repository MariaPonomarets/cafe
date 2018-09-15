import React from 'react';
import { SafeAreaView } from 'react-navigation';

import styled from 'styled-components';

import { container } from './styles';

const SafeArea = styled(SafeAreaView).attrs({
  forceInset: {
    vertical: 'never',
    horizontal: 'always',
  },
})`
  ${container};
`;


export default SafeArea;