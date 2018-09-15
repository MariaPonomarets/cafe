import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import { container, text } from './styles';

const ButtonComponent = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  ${container};
`;

const Text = styled.Text`
  ${text};
`;

const Button = ({ children, ...rest }) => (
  <ButtonComponent {...rest} style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text>
      {children}
    </Text>
  </ButtonComponent>
);

export default Button;