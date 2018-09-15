import React, { Fragment } from 'react';
import styled, { withTheme } from 'styled-components';
import { TextInput, Text } from 'react-native';

import { container, errorText } from './styles';

const InputComponent = styled(TextInput).attrs({
  underlineColorAndroid: 'transparent',
})`
  ${container};
  color: ${({ theme }) => theme.inputColor};
`;

const Error = styled.Text`
  ${errorText};
`;

const Input = ({ theme: { placeholderColor }, error, ...rest }) => (
  <Fragment>
    <InputComponent placeholderTextColor={placeholderColor} {...rest}/>
    {error ? (<Error>{error}</Error>) : null}
  </Fragment>
);

export default withTheme(Input);